require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bookingRouter = require("./routes/booking");

const app = express();

const allowedOrigins = (process.env.CORS_ORIGIN || "https://sc-cool.vercel.app")
  .split(",")
  .map((o) => o.trim());

app.use(
  cors({
    origin: allowedOrigins,
  }),
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is awake",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api", bookingRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "Internal server error." });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Sc Cool backend listening on port ${PORT}`);
});
