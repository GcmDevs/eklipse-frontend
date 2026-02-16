export const ADMIN_AUTHORITY = '001001001';

const codeModules = {
  gen: '001',
  hpn: '002',
  hcn: '003',
  sln: '004',
  crn: '005',
  inn: '006',
  ext: '007',
  gmn: '008',
};

export const MODULES = {
  GEN: {
    CODE: codeModules.gen,
    SUBS: {
      SEGURIDAD: `${codeModules.gen}001`,
      PERMISOS: `${codeModules.gen}002`,
      DEPENDENCIAS: `${codeModules.gen}003`,
    },
  },
  HPN: {
    CODE: codeModules.hpn,
    SUBS: {
      DIETAS: `${codeModules.hpn}001`,
      GESTION_CLINICA: `${codeModules.hpn}002`,
      CENSOS: `${codeModules.hpn}003`,
      CAMAS: `${codeModules.hpn}004`,
      REFERENCIA: `${codeModules.hpn}005`,
      TRIAGE: `${codeModules.hpn}006`,
      APIS: `${codeModules.hpn}007`,
      AUDITORIA: `${codeModules.hpn}008`,
    },
  },
  HCN: {
    CODE: codeModules.hcn,
    SUBS: {
      BALANCES_ENFERMERIA: `${codeModules.hcn}001`,
      EPICRISIS: `${codeModules.hcn}002`,
      INTERCONSULTAS: `${codeModules.hcn}003`,
    },
  },
  SLN: {
    CODE: codeModules.sln,
    SUBS: {
      INFORMES_GERENCIALES: `${codeModules.sln}001`,
      PRODUCTOS: `${codeModules.sln}002`,
      CONTROL_EGRESOS: `${codeModules.sln}003`,
      VALIDACIONES: `${codeModules.sln}004`,
    },
  },
  CRN: {
    CODE: codeModules.crn,
    SUBS: {
      GESTIONES_CONCILIACIONES: `${codeModules.crn}001`,
      RADICACIONES: `${codeModules.crn}002`,
      FORMATOS: `${codeModules.crn}003`,
    },
  },
  INN: {
    CODE: codeModules.inn,
    SUBS: {
      RECEPCION_TECNICA: `${codeModules.inn}001`,
      DOCUMENTOS: `${codeModules.inn}002`,
      SUMINISTROS: `${codeModules.inn}003`,
      CENTRAL_COMPRAS: `${codeModules.inn}004`,
      PRODUCTOS: `${codeModules.inn}005`,
      COTIZACIONES_PREFABRICADAS: `${codeModules.inn}006`,
      ENLACES_EXTERNOS: `${codeModules.inn}007`,
      FARMACIA: `${codeModules.inn}008`,
      SERVICIO_TECNICO: `${codeModules.inn}009`,
      SOLICITUDES_MEZCLAS: `${codeModules.inn}010`,
      EQUIPOS_BIOMEDICOS: `${codeModules.inn}011`,
      OFERTAS: `${codeModules.inn}012`,
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
