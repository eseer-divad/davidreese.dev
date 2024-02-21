// src/pages/index.js

import Head from 'next/head';
import global_styles from '../styles/globals.css';
import index_styles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={index_styles.container}>
      <Head>
        <title>🔨 David Reese's Portfolio 📐</title>
        <meta name="description" content="Homepage for David Reese's Portfolio & Development Projects." />
      </Head>

      <main className={index_styles.main}>
        <h1 className={index_styles.title}>
          Welcome to My Next.js Homepage!
        </h1>
        <p className={index_styles.description}>
          Get started by editing <code className={index_styles.code}>src/pages/index.js</code>
        </p>

        {/* Add more content here as needed */}
      </main>

      <footer className={index_styles.footer}>
        <p className={index_styles.description}>
            This is a (React/Next/Bootstrap 5) portfolio website hosting the projects of David Reese. 
        </p>
      </footer>
    </div>
  );
}