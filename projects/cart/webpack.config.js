const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack.js');

module.exports = withModuleFederationPlugin({
  name: 'cart',

  exposes: {
    './Component': './projects/cart/src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
