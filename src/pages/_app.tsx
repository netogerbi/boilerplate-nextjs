import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon512" />
        <link rel="apple-touch-icon" href="/img/icon512" />
        <meta name="description" content="boilerplate" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
