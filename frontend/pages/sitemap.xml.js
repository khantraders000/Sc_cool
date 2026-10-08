import { locations } from "@/data/locations";

export default function sitemap() {
  const base = "https://sccool.in";

  return [
    { url: base, lastModified: new Date() },
    ...locations.map(({ slug }) => ({
      url: `${base}/ac-repair/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
