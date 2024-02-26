// src/pages/index.js
import React, { useState, useEffect } from 'react'
import RootLayout from '@/app/layout';
import Head from 'next/head';
import global_styles from '../styles/globals.css';
import index_styles from '../styles/index.module.css';

export default function Home() {
  // Cycle through title array, keep state
  // TODO: "a developer" vs "a engineer" grammar
  const titles = ['developer.', 'designer.', 'engineer.', 'sysadmin.', ]
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    // arrow function to cycle the titles
    const cycleTitles = () => {
      const currentIndex = titles.indexOf(currentTitle);
      const nextIndex = (currentIndex + 1) % titles.length;
      setCurrentTitle(titles[nextIndex]);
    };
    // cycle every 1500 milliseconds 
    const intervalId = setInterval(cycleTitles, 2000);
    return () => clearInterval(intervalId);
  }, [currentTitle]);

  return (
    <div>
      <Head>
        <title>Development Portfolio & Blog</title>
        <meta name="description" content="Homepage for David Reese's Portfolio & Development Projects." />
      </Head> 

      <main className={index_styles.main}>
        <h1 className={index_styles.title}>
        David is a {currentTitle}
        </h1>
        <ul className={index_styles.bulletPoints}>
          <li>Currently a Web Designer at the Buchtel College of Arts & Sciences.</li>
          <li>Previously a Support Analyst, then Systems Administrator Intern with the IT Department.</li>
          <li>Employed & earning a B.S. of Computer Science @ The University of Akron.</li>
        </ul>
      </main>   
    </div>
  );
}