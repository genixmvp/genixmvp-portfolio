import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SUPPORTED = ["en", "es"];

export default async function RootPage() {
  // Try to detect preferred language from request headers, fall back to 'en'
  const h = await headers();
  const accept = h.get("accept-language") || "";
  const first = accept.split(",")[0] || "";
  const primary = first.split("-")[0];
  const locale = SUPPORTED.includes(primary) ? primary : "en";

  // server-side redirect to the localized landing route (e.g. /en or /es)
  redirect(`/${locale}`);
}
