/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */

!process.env.SKIP_ENV_VALIDATION && (await import("./config/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: process.env.HOMEPAGE_ID
          ? `/pages/${process.env.HOMEPAGE_ID}/`
          : "/fr",
        permanent: false,
      },
    ];
  },
};

export default config;
