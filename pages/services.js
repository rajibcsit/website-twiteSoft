import Services from "@/components/Services";
import Head from "next/head";

export default function servicePages() {
  return (
    <>
      <Head>
        <title>Services Twite Soft</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-12">
        <Services />
      </div>
    </>
  );
}
