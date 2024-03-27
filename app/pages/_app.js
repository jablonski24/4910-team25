// import "@/styles/globals.css";
// import Amplify from 'aws-amplify';
// import awsExports from "aws-exports.js";

// Amplify.configure(awsExports);

// function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// export default App;

// pages/_app.js or a specific page like pages/index.js
import '@/styles/globals.css'; // Ensure this is correctly set up for global styles in Next.js
import Amplify from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../path/to/your/amplifyconfiguration.json'; // Adjust the path as necessary

Amplify.configure(config);

function App({ Component, pageProps, signOut, user }) {
  // You can conditionally render authentication-related components
  // if you're using this in _app.js and want to control which pages are protected
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <Component {...pageProps} />
    </>
  );
}

export default withAuthenticator(App, { includeGreetings: true });

