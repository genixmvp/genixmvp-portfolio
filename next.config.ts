import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
    //turbo: false, // ⛔ Desactiva Turbopack (causa común de que Tailwind no cargue)
  },
};

export default nextConfig;
