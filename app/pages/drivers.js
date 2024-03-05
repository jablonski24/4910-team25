// pages/drivers.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Typography, Container, Grid, Button } from '@mui/material';
import { useRouter } from 'next/router';

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 16,
  },
  applyButton: {
    marginBottom: 16,
    marginLeft: 10,
  },
}));

export default function Drivers() {
  const classes = useStyles();
  const router = useRouter();

  // Sample driver data (replace with actual data)
  const driverData = [
    { id: 1, name: 'Driver 1', points: 120, goal: 500 },
    { id: 2, name: 'Driver 2', points: 300, goal: 1000 },
    // Add more drivers as needed
  ];

  const handleApplyClick = () => {
    router.push('/application');
  };

  return (
    <>
      <Head>
        <title>Drivers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h3" gutterBottom>
          Welcome Driver
          <Button
            variant="contained"
            color="primary"
            className={classes.applyButton}
            onClick={handleApplyClick}
          >
            Apply
          </Button>
        </Typography>

        {/* Dashboard */}
        <div>
          <Typography variant="h4" gutterBottom>
            Your Dashboard
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
        </div>

        {/* Other Drivers */}
        <div>
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
      </Container>
    </>
  );
}