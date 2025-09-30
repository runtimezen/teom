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
    cssCodeSplit: true,
    lib: {
      cssFileName: "style",
      entry: {
        "index": resolve(__dirname, "src/index.ts"),
        "style": resolve(__dirname, "src/styles/style.scss"),
        "themes/neutral": resolve(__dirname, "src/themes/neutral.scss"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format == "es" ? "js" : "cjs"}`,
    },
  },
});
