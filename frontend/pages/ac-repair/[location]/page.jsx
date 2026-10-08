import { notFound } from "next/navigation";
import { locations, getLocation } from "@/data/locations";
import LocationPageClient from "./LocationPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map(({ slug }) => ({ location: slug }));
}

export async function generateMetadata({ params }) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return {
    title: `AC Repair & Service in ${location.name}, Mumbai | SC Cool Service`,
    description: `Book AC repair, installation, gas refill, deep cleaning and maintenance service in ${location.name}, Mumbai with SC Cool Service.`,
    alternates: { canonical: `https://sccool.in/ac-repair/${location.slug}` },
    openGraph: {
      title: `AC Repair & Service in ${location.name}, Mumbai | SC Cool Service`,
      description: `Professional AC service in ${location.name}, Mumbai. Repair, installation, gas refill, cleaning and AMC support.`,
      url: `https://sccool.in/ac-repair/${location.slug}`,
      type: "website",
    },
  };
}

export default async function LocationPage({ params }) {
  const { location: slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "SC Cool Service",
    url: `https://sccool.in/ac-repair/${location.slug}`,
    telephone: "+91-97939-97768",
    areaServed: { "@type": "Place", name: `${location.name}, Mumbai, Maharashtra, India` },
    serviceType: ["AC Repair", "AC Installation", "AC Gas Refill", "AC Deep Cleaning", "AC Maintenance"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationPageClient location={location} />
    </>
  );
}
