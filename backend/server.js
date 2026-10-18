require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

// EXISTING BOOKING ROUTE — preserve this
const bookingRouter = require("./routes/booking");

// NEW REVIEWS SYSTEM
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const dns = require("dns");
dns.setServers(["1.1.1.1","8.8.8.8"]);

const app = express();

// Existing CORS_ORIGIN supported, with FRONTEND_ORIGIN fallback
const allowedOrigins = (
  process.env.CORS_ORIGIN ||
  process.env.FRONTEND_ORIGIN ||
  "https://sccool.in"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      // Allow requests without an Origin header, e.g. Postman/server-to-server
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "100kb" }));
app.use(cookieParser());

// Keep the API protected against excessive requests
app.use(
  "/api",
  rateLimit({
    windowMs: 60 * 1000,
    limit: 120,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  })
);

// EXISTING HEALTH CHECK — same response fields
app.get("/health", (req, res) => {
  console.log("🔥 HEALTH CHECK HIT:", new Date().toISOString());

  res.status(200).json({
    success: true,
    message: "Backend is awake",
    timestamp: new Date().toISOString(),
  });
});

// NEW: Admin authentication
app.use("/api/admin/auth", authRoutes);

// NEW: Public reviews + protected admin CRUD
// Mount these BEFORE the existing booking router.
app.use("/api/reviews", reviewRoutes);

// EXISTING BOOKING FUNCTIONALITY — unchanged prefix
app.use("/api", bookingRouter);

// Unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

// Central error handler
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.message === "Origin not allowed by CORS") {
    return res.status(403).json({
      success: false,
      error: "Origin not allowed by CORS.",
    });
  }

  if (
    err.name === "ValidationError" ||
    err.name === "CastError" ||
    err.type === "entity.parse.failed"
  ) {
    return res.status(400).json({
      success: false,
      error: "Invalid request data.",
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      error: "A record with these details already exists.",
    });
  }

  console.error("❌ Server error:", err);

  res.status(500).json({
    success: false,
    error: "Internal server error.",
  });
});

const PORT = process.env.PORT || 4000;

// Preserve existing server startup and health-check availability.
// The reviews API requires MongoDB; existing booking routes remain mounted.
app.listen(PORT, () => {
  console.log(`Sc Cool backend listening on port ${PORT}`);
});

connectDB().catch((err) => {
  console.error(
    "❌ MongoDB connection failed. Review database operations may not work:",
    err.message
  );
});
