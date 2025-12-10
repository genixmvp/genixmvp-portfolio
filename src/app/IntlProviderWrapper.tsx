"use client";

import React, { useEffect } from "react";
import { IntlProvider } from "react-intl";

export default function IntlProviderWrapper({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages?: Record<string, string>;
}) {
  useEffect(() => {
    // Runtime diagnostic to help debug client-side / hydration issues
    // When the provider mounts we log the locale and a small sample of messages
    const count = messages ? Object.keys(messages).length : 0;
    // show a few keys (up to 5) so it's useful in the console without being noisy
    const sample = messages ? Object.keys(messages).slice(200, 205) : [];
    // eslint-disable-next-line no-console
    console.log("[IntlProviderWrapper] mounted — locale:", locale, "messagesCount:", count, "sampleKeys:", sample);
  }, [locale, messages]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
