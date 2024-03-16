/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  DEV: boolean;
  SENDGRID_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
