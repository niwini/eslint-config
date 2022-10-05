module.exports = {
  extends: [
    '@niwini/eslint-config-react',
    '@niwini/eslint-config-typescript',
    './rules/react-typescript',
  ].map(require.resolve),
  rules: {}
};
