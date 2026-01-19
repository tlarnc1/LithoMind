// open-next.config.ts
import type { UserOpenNextConfig } from '@opennextjs/cloudflare';

const config: UserOpenNextConfig = {
  adapter: '@opennextjs/cloudflare',
  
  // Next.js 16のApp Router対応
  appDirectory: true,
  
  // 必要に応じてランタイム指定（デフォルトでNode.js）
  // edgeRuntime: false, // Node.jsランタイムを使う（推奨）
};

export default config;
