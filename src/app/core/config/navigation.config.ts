import { NavModule } from '../models/navigation.model';

/**
 * NAVIGATION CONFIG - Single source of truth
 * ============================================
 * Para agregar un modulo, submodulo o ruta, solo edita este archivo.
 * La UI se adapta automaticamente a cualquier profundidad.
 *
 * Estructura:  Modulo -> Submodulo -> Ruta
 *
 * Escalado actual de ejemplo:
 *   6 modulos x 3 submodulos x 3 rutas = 54 rutas
 *   El usuario solo ve max 6-8 tarjetas por nivel.
 */
export const NAVIGATION_CONFIG: NavModule[] = [
  {
    id: 'seguridad',
    label: 'Seguridad',
    description: 'Autenticacion, permisos, auditoria y control de acceso al sistema.',
    icon: 'shield-check',
    accent: 'amber',
    submodules: [
      {
        id: 'permisos',
        label: 'Permisos',
        description: 'Gestion de modulos, roles y permisos de usuarios.',
        icon: 'lock',
        accent: 'blue',
        routes: [
          {
            id: 'crear-modulos',
            label: 'Crear modulos, submodulos y permisos',
            description: 'Definir la estructura de modulos y sus permisos asociados.',
            icon: 'layers',
            href: '/seguridad/permisos/crear-modulos',
          },
          {
            id: 'permisos-usuario',
            label: 'Gestionar permisos por usuario',
            description: 'Asignar y revocar permisos individuales por usuario.',
            icon: 'user-cog',
          },
          {
            id: 'permisos-rol',
            label: 'Gestionar permisos por rol',
            description: 'Administrar permisos agrupados por rol.',
            icon: 'users',
          },
        ],
      },
    ],
  },
  {
    id: 'gestion-clinica',
    label: 'Gestion Clinica',
    description: 'Manejo de pacientes, historiales clinicos y citas medicas.',
    icon: 'stethoscope',
    accent: 'teal',
    submodules: [
      {
        id: 'pacientes',
        label: 'Pacientes',
        description: 'Registro y administracion de pacientes.',
        icon: 'user-round',
        accent: 'teal',
        routes: [
          {
            id: 'registro-pacientes',
            label: 'Registro de pacientes',
            description: 'Crear y editar fichas de pacientes nuevos y existentes.',
            icon: 'user-plus',
          },
          {
            id: 'historial-clinico',
            label: 'Historial clinico',
            description: 'Consultar y actualizar historiales medicos.',
            icon: 'file-heart',
          },
          {
            id: 'buscar-pacientes',
            label: 'Buscar pacientes',
            description: 'Busqueda avanzada por nombre, cedula o codigo.',
            icon: 'search',
          },
        ],
      },
      {
        id: 'citas',
        label: 'Citas Medicas',
        description: 'Programacion y seguimiento de citas.',
        icon: 'calendar-check',
        accent: 'green',
        routes: [
          {
            id: 'agendar-cita',
            label: 'Agendar cita',
            description: 'Crear nueva cita medica para un paciente.',
            icon: 'calendar-plus',
          },
          {
            id: 'ver-agenda',
            label: 'Ver agenda',
            description: 'Consultar la agenda de citas por medico o especialidad.',
            icon: 'calendar',
          },
          {
            id: 'citas-pendientes',
            label: 'Citas pendientes',
            description: 'Revisar citas sin confirmar o reprogramar.',
            icon: 'clock',
          },
        ],
      },
      {
        id: 'consultorios',
        label: 'Consultorios',
        description: 'Gestion de consultorios y disponibilidad.',
        icon: 'building',
        accent: 'purple',
        routes: [
          {
            id: 'asignar-consultorio',
            label: 'Asignar consultorio',
            description: 'Asignar consultorios a medicos por turno.',
            icon: 'door-open',
          },
          {
            id: 'disponibilidad',
            label: 'Disponibilidad',
            description: 'Ver y editar la disponibilidad de consultorios.',
            icon: 'layout-grid',
          },
          {
            id: 'mantenimiento',
            label: 'Mantenimiento',
            description: 'Marcar consultorios en mantenimiento o fuera de servicio.',
            icon: 'wrench',
          },
        ],
      },
    ],
  },
  {
    id: 'farmacia',
    label: 'Farmacia',
    description: 'Inventario de medicamentos, dispensacion y proveedores.',
    icon: 'pill',
    accent: 'green',
    submodules: [
      {
        id: 'inventario',
        label: 'Inventario',
        description: 'Control de stock y movimientos de medicamentos.',
        icon: 'package',
        accent: 'green',
        routes: [
          {
            id: 'stock-actual',
            label: 'Stock actual',
            description: 'Ver niveles de inventario en tiempo real.',
            icon: 'bar-chart',
          },
          {
            id: 'entradas-salidas',
            label: 'Entradas y salidas',
            description: 'Registrar movimientos de inventario.',
            icon: 'arrow-left-right',
          },
          {
            id: 'alertas-stock',
            label: 'Alertas de stock',
            description: 'Configurar y revisar alertas de minimos.',
            icon: 'alert-triangle',
          },
        ],
      },
      {
        id: 'dispensacion',
        label: 'Dispensacion',
        description: 'Entrega de medicamentos a pacientes.',
        icon: 'hand-heart',
        accent: 'teal',
        routes: [
          {
            id: 'dispensar',
            label: 'Dispensar medicamento',
            description: 'Registrar entrega de medicamentos.',
            icon: 'package-check',
          },
          {
            id: 'historial-dispensacion',
            label: 'Historial de dispensacion',
            description: 'Consultar entregas anteriores.',
            icon: 'history',
          },
          {
            id: 'recetas-pendientes',
            label: 'Recetas pendientes',
            description: 'Recetas por despachar o en espera.',
            icon: 'clipboard-list',
          },
        ],
      },
      {
        id: 'proveedores',
        label: 'Proveedores',
        description: 'Gestion de proveedores y ordenes de compra.',
        icon: 'truck',
        accent: 'amber',
        routes: [
          {
            id: 'lista-proveedores',
            label: 'Lista de proveedores',
            description: 'Directorio de proveedores registrados.',
            icon: 'book-user',
          },
          {
            id: 'ordenes-compra',
            label: 'Ordenes de compra',
            description: 'Crear y consultar ordenes de compra.',
            icon: 'shopping-cart',
          },
          {
            id: 'evaluacion-proveedores',
            label: 'Evaluacion de proveedores',
            description: 'Evaluar desempeno y cumplimiento.',
            icon: 'star',
          },
        ],
      },
    ],
  },
  {
    id: 'laboratorio',
    label: 'Laboratorio',
    description: 'Ordenes de laboratorio, resultados y equipos diagnosticos.',
    icon: 'flask-conical',
    accent: 'blue',
    submodules: [
      {
        id: 'ordenes-lab',
        label: 'Ordenes',
        description: 'Crear y gestionar ordenes de laboratorio.',
        icon: 'clipboard-plus',
        accent: 'blue',
        routes: [
          {
            id: 'nueva-orden',
            label: 'Nueva orden',
            description: 'Crear una orden de laboratorio para un paciente.',
            icon: 'file-plus',
          },
          {
            id: 'ordenes-pendientes',
            label: 'Ordenes pendientes',
            description: 'Ordenes sin procesar o en curso.',
            icon: 'list-todo',
          },
          {
            id: 'historial-ordenes',
            label: 'Historial de ordenes',
            description: 'Consultar ordenes pasadas y sus resultados.',
            icon: 'file-search',
          },
        ],
      },
      {
        id: 'resultados',
        label: 'Resultados',
        description: 'Carga y consulta de resultados clinicos.',
        icon: 'file-check',
        accent: 'green',
        routes: [
          {
            id: 'cargar-resultado',
            label: 'Cargar resultado',
            description: 'Ingresar resultados de examenes procesados.',
            icon: 'upload',
          },
          {
            id: 'validar-resultados',
            label: 'Validar resultados',
            description: 'Revision y aprobacion de resultados por el laboratorista.',
            icon: 'check-circle',
          },
          {
            id: 'imprimir-resultados',
            label: 'Imprimir resultados',
            description: 'Generar e imprimir reportes de resultados.',
            icon: 'printer',
          },
        ],
      },
      {
        id: 'equipos',
        label: 'Equipos',
        description: 'Control de equipos diagnosticos del laboratorio.',
        icon: 'microscope',
        accent: 'purple',
        routes: [
          {
            id: 'inventario-equipos',
            label: 'Inventario de equipos',
            description: 'Listado de equipos disponibles y su estado.',
            icon: 'monitor',
          },
          {
            id: 'calibracion',
            label: 'Calibracion',
            description: 'Programar y registrar calibraciones.',
            icon: 'settings',
          },
          {
            id: 'mantenimiento-equipos',
            label: 'Mantenimiento',
            description: 'Registrar mantenimiento preventivo y correctivo.',
            icon: 'wrench',
          },
        ],
      },
    ],
  },
  {
    id: 'facturacion',
    label: 'Facturacion',
    description: 'Facturacion, cobros, convenios y reportes financieros.',
    icon: 'receipt',
    accent: 'purple',
    submodules: [
      {
        id: 'facturar',
        label: 'Facturacion',
        description: 'Emision y gestion de facturas.',
        icon: 'file-text',
        accent: 'purple',
        routes: [
          {
            id: 'nueva-factura',
            label: 'Nueva factura',
            description: 'Crear factura para paciente o aseguradora.',
            icon: 'file-plus',
          },
          {
            id: 'facturas-emitidas',
            label: 'Facturas emitidas',
            description: 'Consultar facturas emitidas y su estado.',
            icon: 'file-stack',
          },
          {
            id: 'notas-credito',
            label: 'Notas de credito',
            description: 'Emitir notas de credito sobre facturas.',
            icon: 'file-x',
          },
        ],
      },
      {
        id: 'cobros',
        label: 'Cobros',
        description: 'Gestion de cobros y pagos.',
        icon: 'banknote',
        accent: 'green',
        routes: [
          {
            id: 'registrar-pago',
            label: 'Registrar pago',
            description: 'Registrar pagos recibidos.',
            icon: 'hand-coins',
          },
          {
            id: 'cuentas-por-cobrar',
            label: 'Cuentas por cobrar',
            description: 'Saldos pendientes de cobro.',
            icon: 'landmark',
          },
          {
            id: 'conciliacion',
            label: 'Conciliacion',
            description: 'Conciliar pagos con facturas emitidas.',
            icon: 'scale',
          },
        ],
      },
      {
        id: 'convenios',
        label: 'Convenios',
        description: 'Gestion de convenios con aseguradoras.',
        icon: 'handshake',
        accent: 'amber',
        routes: [
          {
            id: 'lista-convenios',
            label: 'Lista de convenios',
            description: 'Directorio de convenios vigentes.',
            icon: 'book-open',
          },
          {
            id: 'tarifas',
            label: 'Tarifas por convenio',
            description: 'Configurar tarifas segun convenio.',
            icon: 'dollar-sign',
          },
          {
            id: 'radicacion',
            label: 'Radicacion de cuentas',
            description: 'Radicar cuentas a aseguradoras.',
            icon: 'send',
          },
        ],
      },
    ],
  },
  {
    id: 'reportes',
    label: 'Reportes',
    description: 'Informes operativos, financieros y estadisticos del sistema.',
    icon: 'bar-chart',
    accent: 'red',
    submodules: [
      {
        id: 'reportes-operativos',
        label: 'Operativos',
        description: 'Informes de operacion diaria.',
        icon: 'activity',
        accent: 'red',
        routes: [
          {
            id: 'reporte-citas',
            label: 'Reporte de citas',
            description: 'Estadisticas de citas por periodo.',
            icon: 'calendar-days',
          },
          {
            id: 'reporte-ocupacion',
            label: 'Ocupacion',
            description: 'Tasa de ocupacion de consultorios.',
            icon: 'pie-chart',
          },
          {
            id: 'reporte-atencion',
            label: 'Tiempos de atencion',
            description: 'Analisis de tiempos de espera y atencion.',
            icon: 'timer',
          },
        ],
      },
      {
        id: 'reportes-financieros',
        label: 'Financieros',
        description: 'Informes de ingresos, cobros y cartera.',
        icon: 'trending-up',
        accent: 'green',
        routes: [
          {
            id: 'ingresos',
            label: 'Ingresos',
            description: 'Resumen de ingresos por periodo.',
            icon: 'dollar-sign',
          },
          {
            id: 'cartera',
            label: 'Cartera',
            description: 'Estado de cartera y cuentas por cobrar.',
            icon: 'wallet',
          },
          {
            id: 'comparativo',
            label: 'Comparativo',
            description: 'Comparacion financiera entre periodos.',
            icon: 'git-compare',
          },
        ],
      },
      {
        id: 'reportes-auditoria',
        label: 'Auditoria',
        description: 'Logs del sistema y trazabilidad.',
        icon: 'eye',
        accent: 'amber',
        routes: [
          {
            id: 'log-accesos',
            label: 'Log de accesos',
            description: 'Historial de inicios de sesion.',
            icon: 'log-in',
          },
          {
            id: 'cambios-permisos',
            label: 'Cambios de permisos',
            description: 'Registro de modificaciones en permisos.',
            icon: 'shield-alert',
          },
          {
            id: 'eventos-sistema',
            label: 'Eventos del sistema',
            description: 'Log general de eventos y errores.',
            icon: 'terminal',
          },
        ],
      },
    ],
  },
];
