// pages/index.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main>
        {/* Your Home page content */}
      </main>
    </>
  );
}