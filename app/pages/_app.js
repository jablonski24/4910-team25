import "@/styles/globals.css";
import Amplify from 'aws-amplify';
import awsExports from "app/aws-exports.js"; // Make sure this path is correct

Amplify.configure(awsExports);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
