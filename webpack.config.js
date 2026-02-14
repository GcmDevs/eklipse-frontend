const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const { shareAll } = require('@angular-architects/module-federation/webpack');

const prod = false;

function generateMfUrl(folder, port, production) {
  const localhost = 'http://localhost';
  const prodhost = 'https://eklipse.grupoclinicamedicos.com';
  if (production) return `${prodhost}/mfs/${folder}/remoteEntry.js`;
  else return `${localhost}:${port}/remoteEntry.js`;
}
module.exports = withModuleFederationPlugin({
  name: 'shell',
  shared: { ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }) },
  remotes: {
    //example: generateMfUrl('example', 4199, prod),
  },
});
