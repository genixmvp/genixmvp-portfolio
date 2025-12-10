import { NextResponse } from "next/server";
import dns from "dns";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ success: false });
  }

  const domain = email.split("@")[1];

  // Validación MX real del dominio
  try {
    await new Promise<void>((resolve, reject) => {
      dns.resolveMx(domain, (err, addrs) => {
        if (err || !addrs || addrs.length === 0) reject(err);
        else resolve();
      });
    });
  } catch (e) {
    return NextResponse.json({ success: false });
  }

  // Aquí podrías guardar en Firestore / Supabase
  console.log("PDF unlocked by:", email);

  return NextResponse.json({ success: true });
}
