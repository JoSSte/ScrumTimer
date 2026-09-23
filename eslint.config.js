// @ts-check
const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const angular = require("angular-eslint");

module.exports = defineConfig({
  root: true,
  overrides: [
    {
      files: ["**/*.ts"],
      languageOptions: {
        parser: "@typescript-eslint/parser",
        parserOptions: {
          project: ["./tsconfig.json"],
          tsconfigRootDir: __dirname,
          sourceType: "module",
        },
      },
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        tseslint.configs.stylistic,
        angular.configs.tsRecommended,
      ],
      plugins: {
        "@typescript-eslint": tseslint,
      },
      processor: angular.processInlineTemplates,
      rules: {
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
      },
    },
    {
      files: ["**/*.html"],
      extends: [
        angular.configs.templateRecommended,
        angular.configs.templateAccessibility,
      ],
      rules: {},
    },
  ],
});
