const production = true;
export const env = {
  production,
  localHost: 'http://localhost:9135',
  serveHost: !production ? 'http://localhost' : 'https://eklipse.grupoclinicamedicos.com',
};
