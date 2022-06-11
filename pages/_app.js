import "../styles/globals.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={100}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
