import React, { useState } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { BottomNavigation } from '@mui/material';
import styles from '@/styles/Home.module.css';
import { lightBlue } from '@mui/material/colors';
import ResponsiveAppBar from '../styles/appbar';

export default function About() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <body>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%'}}>
        <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
        >
            <Tab label="Overview" />
            <Tab label="Mission" />
            <Tab label="Team" />
        </Tabs>
        </Box>

        <main className={styles.main}>
          <div className={styles.description}>
            {value === 0 && (
              <section>
                <header>
                  <h1>About Us</h1>
                </header>
                <p>
                  Welcome to the Good Driver Incentive Program, where we revolutionize how companies encourage
                  and reward positive on-road performance among their truck drivers. Our platform empowers sponsors
                  to incentivize good driving behaviors by rewarding drivers with points. These points can be
                  redeemed from a curated catalog of products, providing a tangible recognition for their commitment
                  to safety and excellence.
                </p>
              </section>
            )}

            {value === 1 && (
              <section>
                <header>
                  <h2>Our Mission</h2>
                </header>
                <p>
                  At the heart of our mission is the commitment to foster a safer and more responsible driving
                  culture within the trucking industry. We strive to provide a seamless and rewarding experience
                  for both sponsors and drivers, promoting a collaborative environment that values and recognizes
                  the importance of good driving practices.
                </p>
              </section>
            )}

            {value === 2 && (
              <section>
                <header>
                  <h2>Meet the Team</h2>
                </header>
                <p>
                  Behind the scenes, our dedicated team works tirelessly to innovate and deliver a platform that
                  truly makes a difference. We are passionate about driving positive change within the industry and
                  are united in our vision for safer roads and more responsible driving habits.
                </p>
                {/* Add team member details or images if desired */}
              </section>
            )}
          </div>
        </main>
      </body>
    </>
  );
}