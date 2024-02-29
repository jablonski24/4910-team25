// pages/admin.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main>
        {/* Your Admin page content */}
      </main>
    </>
  );
}