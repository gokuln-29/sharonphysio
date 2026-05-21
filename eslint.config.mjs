import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Project uses static export (`output: 'export'`), which requires the
      // native <img> element instead of next/image (default loader unsupported).
      "@next/next/no-img-element": "off",
    },
  },
]);

export default eslintConfig;
