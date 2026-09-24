import Head from 'next/head';

const faqs = [
  {
    q: 'How quickly does a technician arrive?',
    a: 'In most areas, a technician reaches you within 60 minutes. During peak summer season this can extend to about 90 minutes.',
  },
  {
    q: 'How is pricing decided?',
    a: 'After diagnosis, the technician provides a written estimate. Work only begins once you approve it — the visiting charge is adjusted into the final bill.',
  },
  {
    q: 'What does the warranty cover?',
    a: 'Repairs and gas refills come with a 90-day service warranty — if the same issue returns, the follow-up visit is free.',
  },
  {
    q: 'Do you handle commercial or office AC units?',
    a: 'Yes — we also offer separate AMC contracts for VRF and ducted commercial systems.',
  },
];

export default function FaqSchema() {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />
    </Head>
  );
}