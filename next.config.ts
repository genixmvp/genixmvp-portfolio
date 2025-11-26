import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    //turbo: false, // ⛔ Desactiva Turbopack (causa común de que Tailwind no cargue)
  },
};

export default nextConfig;
