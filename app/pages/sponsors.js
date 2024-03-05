// pages/sponsors.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';

const mockDriverData = [
  { id: 1, name: 'John Doe', points: 150 },
  { id: 2, name: 'Jane Smith', points: 120 },
  { id: 3, name: 'Bob Johnson', points: 90 },
];

const mockStoreItems = [
  { id: 1, name: 'Product 1', price: 20 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 15 },
];

export default function Sponsors() {
  return (
    <>
      <Head>
        <title>Sponsors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h3" gutterBottom>
          Sponsor Dashboard
        </Typography>
        <Typography variant="h4" gutterBottom>
          Sponsored Drivers
        </Typography>
        {mockDriverData.map((driver) => (
          <Card key={driver.id} style={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h6">{driver.name}</Typography>
              <Typography variant="body1">Points: {driver.points}</Typography>
            </CardContent>
          </Card>
        ))}
        <Typography variant="h4" gutterBottom>
          Sponsor Store
        </Typography>
        {mockStoreItems.map((item) => (
          <Card key={item.id} style={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body1">Price: ${item.price}</Typography>
              <Button variant="contained" color="primary">
                Add to Store
              </Button>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
}