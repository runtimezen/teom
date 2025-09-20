/** @type {import("stylelint").Config} */
export default {
  extends: [
    "@repo/stylelint-config",
  ],
  ignoreFiles: ["**/*", "!src/styles/**/*"],
};
