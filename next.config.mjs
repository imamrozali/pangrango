/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "pangrango";

const globalConfig = {
  output: "export",
  // basePath: `/${repoName}`,
  // assetPrefix: `/${repoName}/`,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

const provideConfig = withPWA({
  disable: !isProduction,
  dest: "public",
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest.json$/],
})(globalConfig);

export default provideConfig;
