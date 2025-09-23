import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import pluginDts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    pluginDts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    cssMinify: "lightningcss",
    lib: {
      cssFileName: "style",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
  },
});
