import 'styles/globals.css';

import type { AppProps } from 'next/app';
// import { ThemeProvider } from 'next-themes';
import { useAnalytics } from 'lib/analytics';

function MyApp({ Component, pageProps }: AppProps) {
    useAnalytics();
    return <Component {...pageProps} />;
}

export default MyApp;
