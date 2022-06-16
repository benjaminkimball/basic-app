import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import "../styles/globals.css";

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>basic-app</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default CustomApp;
