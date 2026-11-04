import { Space_Grotesk, Inter } from 'next/font/google';
import '../styles/globals.css';
import "../styles/location-page.css"
import "../styles/GoogleReviewsCarousel.module.css"

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
  return (
    <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6T2WGRD4H3">
    </script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-6T2WGRD4H3');
    </script>
    <div className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
      <Component {...pageProps} />
    </div>
    </>
  );
}
