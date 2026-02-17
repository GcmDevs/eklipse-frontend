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
  EXT: {
    CODE: codeModules.ext,
    SUBS: {
      ADMINISTRATIVOS: `${codeModules.ext}001`,
      ASISTENCIALES: `${codeModules.ext}002`,
      CENTRAL_COMPRAS: `${codeModules.ext}003`,
      SOLICITUD_SERVICIOS: `${codeModules.ext}004`,
      HOPITALIZACION: `${codeModules.ext}005`,
    },
  },
  GMN: { CODE: codeModules.gmn },
};
