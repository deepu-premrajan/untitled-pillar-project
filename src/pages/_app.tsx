import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
  // header component
  // sidebar component
  // navbar component (to store individ links)
  // main window (with all the contents)
  // footer component
}
