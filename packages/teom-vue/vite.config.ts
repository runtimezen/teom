import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import pluginVue from "@vitejs/plugin-vue";
import pluginDts from "vite-plugin-dts";
import pluginIcons from "unplugin-icons/vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    pluginVue(),
    pluginIcons({ compiler: "vue3" }),
    pluginDts({
      tsconfigPath: "./tsconfig.json",
    }),
  ],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
    },
  },
});
