// src/pages/index.js

import Head from 'next/head';
import styles from '../styles/globals.css'; // Adjust the path according to your styles location

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🔨 David Reese's Portfolio 📐</title>
        <meta name="description" content="Homepage for David Reese's Portfolio & Development Projects." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to My Next.js Homepage!
        </h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>src/pages/index.js</code>
        </p>

        {/* Add more content here as needed */}
      </main>

      <footer className={styles.footer}>
        {/* Footer content here */}
      </footer>
    </div>
  );
}