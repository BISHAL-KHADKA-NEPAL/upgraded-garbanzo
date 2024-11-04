import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Script from "next/script";  // Import Script from next/script
import { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./hdfot/Header";
import Footer from "./hdfot/Footer";
import Head from "next/head"; // Import Head from next/head

export const metadata: Metadata = {
  metadataBase: new URL("https://clerk-next-app.vercel.app/"),
  title: "NEPTA",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Head>
        {/* Link to the external favicon */}
        <link rel="icon" href="https://thinknepta.sirv.com/Screenshot%202024-08-31%20014215.png" type="image/png" />
      </Head>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: "#000000" },
          elements: {
            formButtonPrimary:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            socialButtonsBlockButton:
              "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
            socialButtonsBlockButtonText: "font-semibold",
            formButtonReset:
              "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
            membersPageInviteButton:
              "bg-black border border-black border-solid hover:bg-white hover:text-black",
            card: "bg-[#fafafa]",
          },
        }}
      >
        <body className={`min-h-screen flex flex-col antialiased`}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </ClerkProvider>

      {/* Google Ads Script */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9875194408791853" 
        crossOrigin="anonymous" 
      />

      {/* Scripts for PrismJS */}
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </html>
  );
}
