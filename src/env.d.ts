/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}