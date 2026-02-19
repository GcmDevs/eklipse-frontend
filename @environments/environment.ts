const production = true;
export const env = {
  production,
  localHost: 'http://localhost',
  serveHost: !production ? 'http://localhost' : 'https://eklipse.grupoclinicamedicos.com',
};
