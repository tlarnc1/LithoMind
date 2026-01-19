import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router はルート直下の app/ を自動で使うので特別な指定は不要
  turbopack: {
    // ここで「ルートはこのフォルダだよ」と教える
    rootDirectory: __dirname,
  },
};

export default nextConfig;

