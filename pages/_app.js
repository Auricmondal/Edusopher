import "../styles/globals.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import NextNProgress from "nextjs-progressbar";
import * as gtag from '../lib/gtag'
import { useRouter } from "next/router";
import { useEffect } from "react";
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
     {/* Global Site Tag (gtag.js) - Google Analytics */}
     <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
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
