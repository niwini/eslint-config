module.exports = {
  extends: [
    '@niwini/eslint-config-base',
    './rules/eslint',
    './rules/react',
  ].map(require.resolve),
  rules: {}
};
