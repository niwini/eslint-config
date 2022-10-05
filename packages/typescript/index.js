module.exports = {
  extends: [
    "@niwini/eslint-config-base",
    "./rules/eslint",
    "./rules/typescript",
  ].map(require.resolve),
  rules: {},
};
