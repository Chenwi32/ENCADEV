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
      100: "#0282BF",
      100.1: "#76c7ec",
      100.2: "rgba(96, 185, 226, 0.767)",
      200: "#252628",
      300: "#FFFFFF",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ADES-UK | Forms</title>
        <meta name="description" content="ADES-UK forms" />
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
