


import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import queryClient from '@/src/commons/query-client';
import { theme } from '../theme';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <Head>
          <title>Mantine Template</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  );
}
