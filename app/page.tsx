import Image from "next/image";
import Link from "next/link";
import Last from './mcomponents/1';
import Ok from './mcomponents/3';
import Script from 'next/script';  // Import Script from next/script
import "./home.css";

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Page</h1>
   
      <Last />
      <Ok />

      {/* Add the Google Ads script here */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9875194408791853"
        crossOrigin="anonymous"  // Correct prop name
      />
    </div>
  );
}

export default HomePage;
