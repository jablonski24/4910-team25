// pages/drivers.js
import React, { useState } from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Tabs,
  Tab,
  Box,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 16,
  },
  tabsContainer: {
    marginTop: 16,
    borderBottom: '1px solid #ddd', // Optional: Add a border between tabs and content
  },
}));

export default function Drivers() {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Sample driver data (replace with actual data)
  const driverData = [
    { id: 1, name: 'Driver 1', points: 120, goal: 500 },
    { id: 2, name: 'Driver 2', points: 300, goal: 1000 },
    // Add more drivers as needed
  ];

  return (
    <>
      <Head>
        <title>Drivers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
        {/* Box for Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Dashboard" />
          <Tab label="Store" />
        </Tabs>
        </Box>

        <Container>
        {/* Tab Content */}
        {value === 0 && (
          <div>
            {/* Dashboard */}
            <Typography variant="h3" gutterBottom style={{ marginTop: '16px' }}>
              Dashboard
            </Typography>
            {driverData.map((driver) => (
              <Card key={driver.id} className={classes.card}>
                <CardContent>
                  <Typography variant="h6">{driver.name}</Typography>
                  <Typography>Points: {driver.points}</Typography>
                  <Typography>
                    Points until Goal: {driver.goal - driver.points}
                  </Typography>
                </CardContent>
              </Card>
            ))}
            {/* Other Drivers */}
          <Typography variant="h4" gutterBottom>
            Other Drivers
          </Typography>
          <Grid container spacing={2}>
            {driverData.map((driver) => (
              <Grid item key={driver.id} xs={12} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h6">{driver.name}</Typography>
                    <Typography>Points: {driver.points}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </div>
        )}

        {value === 1 && (
          <div>
            {/* Store Content */}
            <Typography variant="h3" gutterBottom style={{ marginTop: '16px' }}>
              Store
            </Typography>
            {/* Add store content here */}
          </div>
        )}
      </Container>
    </>
  );
}