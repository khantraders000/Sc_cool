import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0F1B24" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230F1B24'/%3E%3Cpath d='M16 6v20M8 10l16 12M24 10L8 22' stroke='%234FD1D9' stroke-width='2' stroke-linecap='round'/%3E%3Ccircle cx='16' cy='16' r='3.2' fill='%23C9843F'/%3E%3C/svg%3E"
        />
      </Head>
      <body className="bg-bg text-ink antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}