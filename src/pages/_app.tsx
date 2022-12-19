import type { AppProps } from 'next/app';
import '@/styles/circular-process-bar.css';
import '@/styles/globals.css';
import 'animate.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
