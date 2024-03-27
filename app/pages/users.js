import React, { useState, useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

export default function User() {
  // const [user, setUser] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const userData = await Auth.currentAuthenticatedUser();
  //       setUser(userData);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchUser();
  // }, []);

  // if (loading) {
  //   return <div>Loading user information...</div>;
  // }

  // if (!user) {
  //   return <div>No user is currently logged in.</div>;
  // }

  // Display user informatio

  async function currentAuthenticatedUser() {
  try {
    const { username, userId } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    // console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}
  return (
    
  );
};
