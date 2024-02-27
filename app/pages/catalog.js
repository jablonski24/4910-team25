
// pages/catalog.js
import React from 'react';
import Head from 'next/head';
import ResponsiveAppBar from '../styles/appbar';
import { useEffect, useState } from 'react';
import { parseString } from 'xml2js';


const myHeaders = new Headers();
myHeaders.append("X-EBAY-SOA-SECURITY-APPNAME", "SeanHerm-ItemCata-SBX-caedc4f87-019bf538");
myHeaders.append("X-EBAY-SOA-OPERATION-NAME", "findItemsByKeywords");
myHeaders.append("Content-Type", "application/xml");

const raw = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<findItemsByKeywordsRequest xmlns=\"http://www.ebay.com/marketplace/search/v1/services\">\n  <affiliate>\n    <networkId>9</networkId>\n    <trackingId>1234567890</trackingId>\n    <customId>k-man</customId>\n  </affiliate>\n  <sortOrder>EndTime</sortOrder>\n  <paginationInput>\n    <entriesPerPage>2</entriesPerPage>\n  </paginationInput>\n  <keywords>iphone</keywords>\n</findItemsByKeywordsRequest>\n";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};



export default function Catalog() {
  
  fetch("https://svcs.sandbox.ebay.com/services/search/FindingService/v1", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(""+result))
  .catch((error) => console.error(error));
  
  return (
    <>
      <Head>
        <title>Catalog Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResponsiveAppBar />
      <main>
      </main>
    </>
  );
}

/*

const myHeaders = new Headers();
myHeaders.append("X-EBAY-SOA-SECURITY-APPNAME", "SeanHerm-ItemCata-SBX-caedc4f87-019bf538");
myHeaders.append("X-EBAY-SOA-OPERATION-NAME", "findItemsByKeywords");
myHeaders.append("Content-Type", "application/xml");

const raw = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<findItemsByKeywordsRequest xmlns=\"http://www.ebay.com/marketplace/search/v1/services\">\n  <affiliate>\n    <networkId>9</networkId>\n    <trackingId>1234567890</trackingId>\n    <customId>k-man</customId>\n  </affiliate>\n  <sortOrder>EndTime</sortOrder>\n  <paginationInput>\n    <entriesPerPage>2</entriesPerPage>\n  </paginationInput>\n  <keywords>iphone</keywords>\n</findItemsByKeywordsRequest>\n";

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};


  fetch("https://svcs.sandbox.ebay.com/services/search/FindingService/v1", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));


     fetch("https://svcs.sandbox.ebay.com/services/search/FindingService/v1", requestOptions)
        .then((response) => response.text())
        .then((resultText) => {
          // Update the state with the fetched result
          setResult(resultText);
          console.log(resultText); // If you want to log it to the console as well


           <pre>{JSON.stringify(result, null, 2)}</pre>
    */