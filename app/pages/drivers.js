// pages/drivers.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';

export default function Drivers() {
  return (
    <>
      <Head>
        <title>Drivers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main>
        {/* Your Drivers page content */}
      </main>
    </>
  );
}