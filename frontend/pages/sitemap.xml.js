
import { locations } from "../data/locations";

const BASE_URL = "https://sccool.in";

const SERVICE_TYPES = [
  "ac-repair",
  "ac-service",
  "ac-installation",
  "ac-maintenance",
  "ac-service-near",
];

export async function getServerSideProps({ res }) {
  const staticPages = [
    `${BASE_URL}/`,
    `${BASE_URL}/about`,
  ];

  const locationPages = locations.flatMap(({ slug }) =>
    SERVICE_TYPES.map((service) => `${BASE_URL}/${service}/${slug}`)
  );

  // Remove duplicate URLs
  const uniqueUrls = [
    ...new Set([...staticPages, ...locationPages]),
  ];

  const escapeXml = (value) =>
    String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=3600, stale-while-revalidate=86400"
  );

  res.statusCode = 200;
  res.end(xml);

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
