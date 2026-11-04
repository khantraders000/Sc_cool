import { Space_Grotesk, Inter } from 'next/font/google';
import '../styles/globals.css';
import "../styles/location-page.css"
import "../styles/GoogleReviewsCarousel.module.css"
import Script from 'next/script';
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const GA_MEASUREMENT_ID = 'G-6T2WGRD4H3';
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = gtag;

          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    <div className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
      <Component {...pageProps} />
    </div>
    </>
  );
}
