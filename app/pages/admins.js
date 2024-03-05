// pages/admin.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';
import { Container, Typography, Card, CardContent, Button, TextField, Box } from '@mui/material';

const mockSponsors = [
  { id: 1, name: 'ABC Corporation' },
  { id: 2, name: 'XYZ Ltd' },
];

const mockDrivers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
];

const mockAdmins = [
  { id: 1, name: 'Admin1' },
  { id: 2, name: 'Admin2' },
];

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <Container>
        <Typography variant="h3" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="h4" gutterBottom>
          Manage Sponsors
        </Typography>
        {mockSponsors.map((sponsor) => (
          <Card key={sponsor.id} style={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h6">{sponsor.name}</Typography>
            </CardContent>
          </Card>
        ))}
        <TextField label="New Sponsor Name" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Add Sponsor
        </Button>

        {/* Adding spacing between sections */}
        <Box mt={3} />

        <Typography variant="h4" gutterBottom>
          Manage Drivers
        </Typography>
        {mockDrivers.map((driver) => (
          <Card key={driver.id} style={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h6">{driver.name}</Typography>
            </CardContent>
          </Card>
        ))}
        <TextField label="New Driver Name" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Add Driver
        </Button>

        {/* Adding spacing between sections */}
        <Box mt={3} />

        <Typography variant="h4" gutterBottom>
          Manage Admins
        </Typography>
        {mockAdmins.map((admin) => (
          <Card key={admin.id} style={{ marginBottom: '16px' }}>
            <CardContent>
              <Typography variant="h6">{admin.name}</Typography>
            </CardContent>
          </Card>
        ))}
        <TextField label="New Admin Name" variant="outlined" fullWidth margin="normal" />
        <Button variant="contained" color="primary">
          Add Admin
        </Button>
      </Container>
    </>
  );
}