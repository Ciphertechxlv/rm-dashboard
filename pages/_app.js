import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";

export default function App({ Component, pageProps }) {
  return (
    <div className="shell">
      <Head>
        <title>Cipher&rsquo;s Virtual Office</title>
      </Head>
      <Nav />
      <Component {...pageProps} />
      <footer className="site-footer">
        <span>Cipher&rsquo;s Virtual Office</span>
      </footer>
    </div>
  );
}
