import type { AppProps } from 'next/app';
import { useEffect } from 'react';

import '@/styles/globals.css';
import 'animate.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
