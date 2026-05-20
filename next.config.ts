import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
   images: {
     domains: ["images.unsplash.com"],
  },
};
module.exports = nextConfig;
export default withFlowbiteReact(nextConfig);
