// pages/admin.js
import React, { useState } from 'react';
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
  const [newSponsorName, setNewSponsorName] = useState('');
  const [newDriverName, setNewDriverName] = useState('');
  const [newAdminName, setNewAdminName] = useState('');

  const handleRemoveSponsor = (sponsorId) => {
    // Implement logic to remove the selected sponsor
    console.log(`Removing sponsor with ID: ${sponsorId}`);
  };

  const handleRemoveDriver = (driverId) => {
    // Implement logic to remove the selected driver
    console.log(`Removing driver with ID: ${driverId}`);
  };

  const handleRemoveAdmin = (adminId) => {
    // Implement logic to remove the selected admin
    console.log(`Removing admin with ID: ${adminId}`);
  };

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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveSponsor(sponsor.id)}
                style={{ marginTop: '8px' }}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
        <TextField
          label="New Sponsor Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newSponsorName}
          onChange={(e) => setNewSponsorName(e.target.value)}
        />
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveDriver(driver.id)}
                style={{ marginTop: '8px' }}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
        <TextField
          label="New Driver Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newDriverName}
          onChange={(e) => setNewDriverName(e.target.value)}
        />
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
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleRemoveAdmin(admin.id)}
                style={{ marginTop: '8px' }}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        ))}
        <TextField
          label="New Admin Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newAdminName}
          onChange={(e) => setNewAdminName(e.target.value)}
        />
        <Button variant="contained" color="primary">
          Add Admin
        </Button>
      </Container>
    </>
  );
}