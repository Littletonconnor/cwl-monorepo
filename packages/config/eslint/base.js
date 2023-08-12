/** @type {import('eslint').Linter.Config} */
const config = {
  ignorePatterns: [
    "node_modules",
    "dist",
    ".next",
    "coverage",
    "storybook-static",
    "tmp",
    "pnpm-lock.yaml",
  ],
  env: {
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:eslint-comments/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        prefer: "type-imports",
        fixStyle: "inline-type-imports",
      },
    ],
    "eslint-comments/no-unused-disable": "error",
  },
};

module.exports = config;
