
import { locations } from "../data/locations";

const BASE_URL = "https://sccool.in";

export async function getServerSideProps({ res }) {
  const staticPages = [
    {
      url: `${BASE_URL}/`,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      url: `${BASE_URL}/about`,
      changefreq: "monthly",
      priority: "0.7",
    },
  ];

  // Automatically include every location in data/locations.js
  const locationPages = locations.map(({ slug }) => ({
    url: `${BASE_URL}/ac-repair/${slug}`,
    changefreq: "monthly",
    priority: "0.8",
  }));

  // Remove duplicate URLs
  const uniquePages = [
    ...new Map(
      [...staticPages, ...locationPages].map((page) => [
        page.url,
        page,
      ])
    ).values(),
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
${uniquePages
  .map(
    (page) => `  <url>
    <loc>${escapeXml(page.url)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");

  res.statusCode = 200;
  res.end(xml);

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}
