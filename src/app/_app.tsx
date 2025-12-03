export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  // The App Router uses the app/ layout system — keep this file a simple passthrough
  // to avoid mixing another provider (next-intl) with our react-intl provider in layouts.
  return <Component {...pageProps} />;
}