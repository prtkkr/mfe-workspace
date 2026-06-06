const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack.js');

module.exports = withModuleFederationPlugin({
  name: 'products',

  exposes: {
    './Component': './projects/products/src/app/app.ts',
    './Routes': './projects/products/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
