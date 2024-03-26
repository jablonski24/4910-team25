import "@/styles/globals.css";
import Amplify from 'aws-amplify';
import awsExports from "aws-exports.js";

Amplify.configure(awsExports);

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
