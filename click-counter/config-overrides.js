const { override, addBabelPresets, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPresets([
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: false,
      debug: false,
    },
  ]),
  ...addBabelPlugins(['react-remove-properties', { properties: ['data-test'] }])
);
