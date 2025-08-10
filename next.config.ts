import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  transpilePackages: ["next-intl"],
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
