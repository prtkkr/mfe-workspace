import {
  shareAll,
  withModuleFederationPlugin,
} from '@angular-architects/module-federation/webpack';

export default withModuleFederationPlugin({
  name: 'shell',

  exposes: {
    './Component': './projects/shell/src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
