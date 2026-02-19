const {
  shareAll,
  SharedMappings,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new SharedMappings();
sharedMappings.register(path.join(__dirname, './tsconfig.json'), []);

module.exports = withModuleFederationPlugin({
  name: 'example',

  exposes: {
    './mf': 'src/routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
