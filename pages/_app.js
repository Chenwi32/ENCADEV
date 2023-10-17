import {
  ChakraProvider,
  extendTheme,
  withDefaultProps,
} from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/layout";
import { AuthContextProvider } from "../components/authcontprov";
import Head from "next/head";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#00D3C0",
      200: "#252628",
      300: "#FFFFFF",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ENCADEV</title>
        <meta name="description" content="ENCADEV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthContextProvider>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
