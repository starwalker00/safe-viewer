import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CacheProvider } from 'rest-hooks';
import ReactDOM from 'react-dom';
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <Component {...pageProps} />
    </CacheProvider>
  )
}

// disables ssr for entire app
export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});
