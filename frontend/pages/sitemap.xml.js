import { locations } from "../locations";

export default function sitemap() {
  const baseUrl = "https://www.sccool.in";

  const staticPages = [
    {
      url: `${baseUrl}/`,
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/ac-repair/${location.slug}`,
    changefreq: "monthly",
    priority: 0.8,
  }));

  const allPages = [...staticPages, ...locationPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}