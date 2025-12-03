// Minimal local typings for react-intl to match the used API surface in this app.
// These override conflicting legacy @types/react-intl if present locally and give
// us the hooks we use: useIntl and IntlProvider.

import * as React from "react";

declare module "react-intl" {
  export function useIntl(): {
    formatMessage(descriptor: { id: string; defaultMessage?: string }, values?: Record<string, any>): string;
    // add other used helpers here if needed
  };

  export interface IntlProviderProps {
    locale?: string;
    messages?: Record<string, string>;
    children?: React.ReactNode;
  }

  export const IntlProvider: React.ComponentType<IntlProviderProps>;
}
