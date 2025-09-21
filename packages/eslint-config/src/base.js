import eslint from "@eslint/js";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginTurbo from "eslint-plugin-turbo";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config} */
export const eslintConfig = tseslint.config(
  { ignores: ["*.d.ts", "**/dist"] },
  {
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginVue.configs["flat/recommended"],
    ],
    files: ["**/*.{js,ts,vue,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { parser: tseslint.parser },
    },
    plugins: {
      "turbo": pluginTurbo,
      "@stylistic": pluginStylistic,
    },
    rules: {
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/arrow-spacing": ["error", { "before": true, "after": true }],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/brace-style": ["error", "stroustrup"],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": ["error", { "before": false, "after": true }],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/curly-newline": ["error", { "consistent": true }],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": ["error", "always"],
      "@stylistic/function-call-spacing": ["error", "never"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/member-delimiter-style": ["error"],
      "@stylistic/new-parens": ["error", "always"],
      "@stylistic/no-extra-semi": ["error"],
      "@stylistic/no-mixed-operators": ["error"],
      "@stylistic/object-curly-newline": ["error", { "consistent": true }],
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-spacing": ["error", { "before": false, "after": true }],
      "vue/max-attributes-per-line": ["warn", { "singleline": { "max": 2 } }], 
    },
  },
);
