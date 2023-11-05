// import "@/styles/globals.css";
import { StateProvider } from '../context/StateContext.tsx';
import '../styles/globals.css'
import Head from "next/head"
import reducer ,{initialState}  from "../context/StateReducers.ts"

export default function App({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Head>
        <title>Whatsapp</title>
        <link rel="shortcut icon" href="/favicom.png" />
      </Head>
      <Component {...pageProps} />;
    </StateProvider>
  )

}
