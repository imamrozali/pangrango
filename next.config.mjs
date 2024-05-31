/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";

const globalConfig = {
  output: "export",
  basePath: "/pangrango",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

// const provideConfig = withPWA({
//   disable: isProduction,
//   dest: "public",
//   register: true,
//   buildExcludes: [/app-build-manifest.json$/],
// })(globalConfig);

export default globalConfig;
