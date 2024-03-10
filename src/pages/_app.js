import '../styles/globals.css';
import RootLayout from '../app/layout.js';
import Head from 'next/head';

function PortfolioApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />       
      </Head>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default PortfolioApp;
