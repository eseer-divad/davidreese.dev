// src/pages/index.js
import React, { useState, useEffect } from 'react'
import RootLayout from '@/app/layout';
import Head from 'next/head';
import global_styles from '../styles/globals.css';
import index_styles from '../styles/index.module.css';
import { Card } from 'react-bootstrap';

export default function Home() {
  // Cycle through title array, keep state
  // TODO: "a developer" vs "a engineer" grammar
  const titles = ['a developer.', 'a designer.', 'an engineer.', 'a SysAdmin.', ]
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    // arrow function to cycle the titles
    const cycleTitles = () => {
      const currentIndex = titles.indexOf(currentTitle);
      const nextIndex = (currentIndex + 1) % titles.length;
      setCurrentTitle(titles[nextIndex]);
    };
    // cycle every 2000 milliseconds 
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
        <div class="container">
          <div class="row">
            <h1 className={index_styles.title}>
                  David is {currentTitle}
            </h1>
            <div class="row">
              <ul className={index_styles.bulletPoints}>
                <p>Currently a Web Designer at the Buchtel College of Arts & Sciences.</p>
                <p>Previously a Support Analyst, then Systems Administrator Intern with the IT Department.</p>
                <p>Employed & earning a B.S. of Computer Science @ The University of Akron.</p>
              </ul>
            </div>
          </div>
          <h2 className={index_styles.title}>
            Projects:
          </h2>
          <div class="row">
            <Card class="col-sm">
              <p>aaaa</p>
            </Card>
            <Card class="col-sm">
              <p>aaaa</p>
            </Card>
            <Card class="col-sm">
              <p>aaaa</p>
            </Card>
          </div>
        </div>
      </main>   
    </div>
  );
}