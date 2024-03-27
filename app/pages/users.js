import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

export default function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user:', error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading user information...</div>;
  }

  if (!user) {
    return <div>No user is currently logged in.</div>;
  }

  // Display user information
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      {/* Display other user attributes as needed */}
      <p><strong>Email:</strong> {user.attributes.email}</p>
    </div>
  );
};
