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
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/styles/style.scss"),
      ],
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format == "es" ? "js" : "cjs"}`,
    },
  },
});
