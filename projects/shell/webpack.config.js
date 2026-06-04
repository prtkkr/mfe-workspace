const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack.js');

module.exports = withModuleFederationPlugin({
  name: 'shell',

  exposes: {
    './Component': './projects/shell/src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
