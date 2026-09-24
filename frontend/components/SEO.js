import Head from "next/head";

export default function SEO({
  title = "Sc Cool AC Services | Mumbra , Maharastra",
  description = "Mumbra,Mumbai’s,Thane most trusted AC repair, installation, gas refill and AMC service. Certified technicians, genuine parts, 90-day warranty. Book a free inspection today.",
  path = "/",
}) {
  const url = `https://www.sccool.in${path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="SC Cool AC Services" />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="Sc Cool AC Services" />
      <meta property="og:image" content="https://www.sccool.in/og-cover.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            name: "Sc Cool AC Services",
            image: "https://www.sccool.in/og-cover.jpg",
            telephone: "+91 97939-97768",
            priceRange: "₹₹",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Mumbra,Mumbai",
              addressRegion: "Maharashtra",
              addressCountry: "IN",
            },
            areaServed: [
              { "@type": "City", name: "Khar road" },
              { "@type": "Place", name: "Bandra" },
              { "@type": "Place", name: "Andheri" },
              { "@type": "Place", name: "Juhu" },
              { "@type": "Place", name: "Dadar" },
              { "@type": "Place", name: "Worli" },
              { "@type": "Place", name: "Thane" },
              { "@type": "Place", name: "Church gate" },
              { "@type": "Place", name: "Panvel" },
              { "@type": "Place", name: "Colaba" },
              { "@type": "Place", name: "Marine line" },
              { "@type": "Place", name: "Charni road" },
              { "@type": "Place", name: "Lower parel" },
              { "@type": "Place", name: "Jogeshwari" },
              { "@type": "Place", name: "Versova" },
              { "@type": "Place", name: "Band stund" },
            ],
            openingHours: "Mo-Su 07:00-22:00",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "1862",
            },
          }),
        }}
      />
    </Head>
  );
}
