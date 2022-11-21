import '../styles/globals.css'
import type { AppProps } from 'next/app'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from "react";
// myCss
import "../styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />
}