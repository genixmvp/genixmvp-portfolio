import type { NextApiRequest, NextApiResponse } from "next";
import dns from "dns";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Método no permitido." });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Correo requerido." });
  }

  const domain = email.split("@")[1];

  try {
    // Verificación MX
    await new Promise<void>((resolve, reject) => {
      dns.resolveMx(domain, (err, addresses) => {
        if (err || !addresses || addresses.length === 0) {
          reject("Dominio sin MX");
        } else {
          resolve();
        }
      });
    });

    // Aquí podrías guardarlo en Firestore o Supabase
    console.log("Correo verificado y almacenado:", email);

    return res.json({ success: true });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "El correo no parece ser real o el dominio no tiene MX."
    });
  }
}
