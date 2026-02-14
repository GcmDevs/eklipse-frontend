export const ADMIN_AUTHORITY = '001001001';

const codeModules = {
  gen: '001',
  ext: '007',
  gmn: '008',
};

export const MODULES = {
  GEN: {
    CODE: codeModules.gen,
    SUBS: {
      SEGURIDAD: `${codeModules.gen}001`,
      PERMISOS: `${codeModules.gen}002`,
    },
  },
  EXT: { CODE: codeModules.ext },
  GMN: { CODE: codeModules.gmn },
};
