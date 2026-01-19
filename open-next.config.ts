// open-next.config.ts
import type { UserOpenNextConfig } from '@opennextjs/cloudflare';

const config: UserOpenNextConfig = {
  adapter: '@opennextjs/cloudflare',
  appDirectory: true,
  // edgeRuntime: false, // ← コメントなので無視される
};

export default config;
