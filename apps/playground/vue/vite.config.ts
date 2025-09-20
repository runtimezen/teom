import { defineConfig } from "vite";
import pluginVue from "@vitejs/plugin-vue";
import pluginIcons from "unplugin-icons/vite";
import pluginUnocss from "unocss/vite";
import presetWind4 from "unocss/preset-wind4";
import presetFonts from "unocss/preset-web-fonts";

export default defineConfig({
  plugins: [
    pluginVue(),
    pluginIcons({ compiler: "vue3" }),
    pluginUnocss({
      presets: [
        presetWind4(),
        presetFonts({
          provider: "bunny",
          fonts: {
            sans: "Geist:400",
          },
        }),
      ],
    }),
  ],
});
