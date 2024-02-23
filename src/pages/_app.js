import '../styles/globals.css';
import RootLayout from '../app/layout.js';

function PortfolioApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default PortfolioApp;
