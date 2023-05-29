import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#0282BF",
      100.1: "#76c7ec",
      200: "#252628",
      300: "#FFFFFF",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head >
      
         {/* Google  Web Fonts (Outfit) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;400;500;600;700;800&display=swap"
          
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Andika:ital@0;1&family=Montserrat:wght@200&family=Poppins:wght@200;300&family=Roboto:wght@300&display=swap"
          
        />
      </Head>
    <ChakraProvider theme={theme}>
      <Layout>
         <Component {...pageProps} />
      </Layout>
     
    </ChakraProvider>
    </>
    
  );
}


export default MyApp;
