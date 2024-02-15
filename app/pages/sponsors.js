// pages/index.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Sponsors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main>
        {/* Your Sponsors page content */}
      </main>
    </>
  );
}