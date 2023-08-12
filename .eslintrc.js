/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  extends: ["cwl-monorepo/base"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};

module.exports = config;
