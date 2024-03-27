import React, { useState, useEffect } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

export default function User() {

async function currentAuthenticatedUser() {
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    console.log(`The username: ${username}`);
    console.log(`The userId: ${userId}`);
    console.log(`The signInDetails: ${signInDetails}`);
  } catch (err) {
    console.log(err);
  }
}
  return (
    <p> Hi </p>
  );
};
