import { FormControl } from '@angular/forms';
import { SafeResourceUrl } from '@angular/platform-browser';
import { BIG_DATA_AUTHORITIES } from '@authorities/big-data';
import { allContexts, GCM_CONTEXTS, GcmContextType } from '@kato-lee/utilities/types';
import { ADMIN } from '@auths/general';

const enlExt = BIG_DATA_AUTHORITIES;
const ctxs = GCM_CONTEXTS;

export const BIG_DATA_PRINCIPAL_AUTHORITIES_CODES = [
  BIG_DATA_AUTHORITIES.ADMINISTRATIVOS.CODE,
  BIG_DATA_AUTHORITIES.ASISTENCIALES.CODE,
  BIG_DATA_AUTHORITIES.CENTRAL_COMPRAS.CODE,
  BIG_DATA_AUTHORITIES.SOLICITUD_SERVICIOS.CODE,
];

//const ultimoKey = 63;

export const SANITIZED = new FormControl(false);

export interface EnlaceExternoI {
  key: number;
  name: string;
  disableOnContexts?: GcmContextType[];
  authorities: string[];
  url: string | SafeResourceUrl;
};

export const BIG_DATA_LINKS_DISCRIMINATED = {
  administrativos: [
    {key: 1, name: 'Laboratorio - Facturación', authorities: [ADMIN,enlExt.ADMINISTRATIVOS.LABORATORIO_CLINICO], url: 'https://app.powerbi.com/view?r=eyJrIjoiOTVmNjQ1NzgtMWQ4NS00M2VmLTlmNTgtYjliY2RjOWI3ODc1IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 2, name: 'Consulta externa', disableOnContexts: allContexts([ctxs.ALTACENTRO, ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CONSULTA_EXTERNA], url: 'https://app.powerbi.com/view?r=eyJrIjoiNDg0YWE4NGItMWNmMy00NjZkLTkyMzgtNWU3MjhiMTZjM2Y1IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 4, name: 'Laboratorio (San Juan)', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.LAB_SAN_JUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjBmYWIzMTMtNjllOS00NmFkLTg0YzEtY2RjODkzNWViOGQ5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 5, name: 'Laboratorio (Valledupar)', disableOnContexts: allContexts([ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.LAB_VALLEDUPAR], url: 'https://app.powerbi.com/view?r=eyJrIjoiYTY0NTI1Y2YtYTFkNS00YWUyLWE5NmEtZmIyYjY1ZThhNmRiIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 6, name: 'Admisiones', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.ADMISIONES_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiMTQzZjUxM2EtYmE2Yi00NzYxLWJkNDUtYjIxYmQ2MDQyYWY4IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 7, name: 'Imagenología', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.IMAGENOLOGIA_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiZTZiNWNmOTQtZjgyNy00ZjA2LWFkNmMtMGZmY2ExODE4ZGQ5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 8, name: 'Cirugía', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.IMAGENOLOGIA_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjZmY2VjZmYtYTJkMy00Yzk4LTk3NjItNGNmYzhhNjM4MjlkIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 9, name: 'Admisiones', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.ADMISIONES_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMWNmZTUyYzItYWY5NC00MzFkLWE1ODgtNDcyMDBiMzMxZWJlIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 10, name: 'Imagenología', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.IMAGENOLOGIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiNjkzOWQ3ZGUtODBiMS00ZTM4LThkOTUtMjI4Y2JmYzk3OTc5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 11, name: 'Cirugía', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CIRUGIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMWMzYTBmYTQtY2E0Yy00NzVjLWI4ZjItMDQ3NzgyZTYyNTAyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 12, name: 'Laboratorio', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.LAB_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiN2Y2ZjBiMTYtNGVjNy00NWE0LTk5NWYtMWQ3ZTIzYzc0YTE0IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 13, name: 'Auditoria', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.AUDITORIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiODA0ODczOGYtYzdiOC00N2E1LWFlNDUtZjc4YjBjZDI3ZTMwIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 22, name: 'Cartera por edades', authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CARTERA_EDADES], url: 'https://app.powerbi.com/view?r=eyJrIjoiOGMwOGMyOWYtNTkyMi00ZmVhLTk0MTAtNjI4ZDJiYzljYTQ3IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 24, name: 'Dashboard facturación de inventario (AMMedical)', disableOnContexts: allContexts([ctxs.AMMEDICAL]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.DASHBOARD_FACTURACION_INVENTARIO_AMMEDICAL], url: 'https://app.powerbi.com/view?r=eyJrIjoiYTBlOTE3YWMtNjZlOS00YTU5LTk5NjAtMDRmMzgzMTViNmM1IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 25, name: 'Laboratorio', authorities: [ADMIN,enlExt.ADMINISTRATIVOS.LABORATORIO_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMmRkMGE1OGEtODJhYy00NjYzLTk5ZmItODE2MTM5MzViNzk1IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 29, name: 'Auditoria', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.AUDITORIA_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjZlYzA5OGItYjVkZi00MWNkLTliZGUtYWJmZjY1YzY1MTcwIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 30, name: 'Auditoría - Consolidado GCM', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.AUDITORIA_CONSOLIDADO_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiNWQ5ZjVjMTYtZWEzMS00Yjk5LWE1MTEtMGE5ODY1YmVjNThiIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 31, name: 'Presidencia', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.PRESIDENCIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMTA4Y2VmYWItMDdjYi00MzllLTgxNTMtYTIyNThjNzEzYTMzIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 36, name: 'Auditoría - Consolidado GCM', disableOnContexts: [ctxs.ALTACENTRO, ctxs.AMMEDICAL], authorities: [ADMIN,enlExt.ADMINISTRATIVOS.AUDITORIA_CONSOLIDADO_AGU_VDP_SJ], url: 'https://app.powerbi.com/view?r=eyJrIjoiNWQ5ZjVjMTYtZWEzMS00Yjk5LWE1MTEtMGE5ODY1YmVjNThiIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 37, name: 'Suministro paciente', authorities: [ADMIN,enlExt.ADMINISTRATIVOS.SUMINISTRO_FARMACIA], url: 'https://app.powerbi.com/view?r=eyJrIjoiYzc3OWUyOTctYTliMy00ZTNiLWE3MzUtNzY0YTRiODgwZDI5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 38, name: 'Admisiones', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.ADMISIONES_SAN_JUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiNDMyNWQ5N2EtNzgxZi00MTgzLTk4NjEtYWUxMDAyMjc1MjIxIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 39, name: 'Cirugía', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CIRUGIA_SAN_JUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiMmYxYzNlODQtY2ZiMi00NGVlLTkwODktY2Q3NzQ5MDJkMDE0IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 40, name: 'Laboratorio', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.LABORATORIO_SAN_JUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiNDdkMDc4ZTUtMGE4NC00MmRmLWIzYWEtOGNmOTgyNTY1YzVjIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 41, name: 'Consulta externa', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CONSULTA_EXTERNA_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiZDc0MzU1NzQtOWMyNi00YmEyLTgzYzgtOGNlMmE4MDc2ZGI3IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 42, name: 'Consulta externa', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CONSULTA_EXTERNA_SANJUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiZGIzY2M0N2ItOWQyMC00ODdlLWEwNGEtNmMxMzA0NzVkZDg5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 45, name: 'Validador de precios', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.VALIDADOR_PRECIOS_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiNmEyODk5NzUtNzMzMS00ODQ3LWEzZDgtYTAyNDZjMTg0N2UyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 46, name: 'Admisiones', disableOnContexts: allContexts([ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.ADMISIONES_VALLEDUPAR], url: 'https://app.powerbi.com/view?r=eyJrIjoiZTY1NGY5NjAtYjEyMi00MzJjLTgwNTItMGU2Mzc4NzUzZTE3IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 47, name: 'Cirugía', disableOnContexts: allContexts([ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CIRUGIA_SAN_JUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiNjY2MTQ0NzAtYjQ4Ni00MTg2LWE1MzUtYmM4MGFlZjZjMzY3IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 48, name: 'Control de antibioticos', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CONTROL_ANTIBIOTICOS_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiNDM2M2Y0NjItNzE1Ny00NDA2LThjY2EtNTAwMTdjYzJiODE0IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 50, name: 'Ajuste de inventario', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.AJUSTE_INVENTARIO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMWRlNWRkNTQtN2Q5NC00OTE3LTgwOTMtZTEyODZjMjdhMzkyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 51, name: 'Dashboard presidencial', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_PRESIDENCIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMGUzOGRjYTYtZDc5MS00MWIzLWI0ZWYtN2Q4YmQ5ZWYwYjM0IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 52, name: 'Censo hospitalario', disableOnContexts: allContexts([ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_HOSPITALARIO_VALLEDUPAR], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjI2YTViNjAtZGU3My00YjIyLThjMmItODI3Y2NkNTdhMGMxIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 53, name: 'Censo hospitalario (alta complejidad)', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_HOSPITALARIO_ALTA_COMPL], url: 'https://app.powerbi.com/view?r=eyJrIjoiNzQyYzI5ZjctODA3Yy00YjgzLTg2MjQtMzkyNzQ3N2JjYjhiIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 54, name: 'Censo hospitalario', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_HOSPITALARIO_ALTCOMPAGU], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjJiMGVmMTUtYzRhYS00Y2FlLWEyZGMtM2RjYmZmNjIwNjAyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 55, name: 'Censo hospitalario', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_HOSPITALARIO_SANJUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiYWIzZjRkNzEtNDAxYS00NDQzLWFiOGItOTAxOWEwMTc5OWY0IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 56, name: 'Censo hospitalario (Medico Centro)', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_HOSPITALARIO_MEDICO_CEN], url: 'https://app.powerbi.com/view?r=eyJrIjoiZjBiY2U4N2UtYTJkNy00ODNlLTkyOTQtZTMwNzBlNjNiMDRmIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 57, name: 'Dashboard poliza diferencial', disableOnContexts: allContexts([ctxs.ALTACENTRO, ctxs.AGUACHICA, ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.DASHBOARD_POLIZA_DIFERENCIAL], url: 'https://app.powerbi.com/view?r=eyJrIjoiOTc0M2YxZjUtYWQ0OC00MWNiLTgyYzQtNTBiZTFiMjYzNzcyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 58, name: 'Censo unificado GCM', authorities: [ADMIN,enlExt.ADMINISTRATIVOS.CENSO_UNIFICADO_GCM], url: 'https://app.powerbi.com/view?r=eyJrIjoiODYwM2QzOGYtNTBkNC00NzA1LWI2NmMtYTYyNzc3Y2QxZGQ2IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 59, name: 'Dashboard seguimiento transfusiones sanguineas', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.DASHBOARD_SEGUIMIENTO_TRANSFUSIONES], url: 'https://app.powerbi.com/view?r=eyJrIjoiNGUwNzBlZDgtY2FhYy00YjMzLTlmOWMtMmZmYWExYTc3MWRlIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 61, name: 'Digiturno CAPS', disableOnContexts: allContexts([ctxs.ALTACENTRO, ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ADMINISTRATIVOS.DIGITURNO_CAPS], url: 'https://app.powerbi.com/view?r=eyJrIjoiMDQzZTRiYmUtMjUyNi00MWQzLThjNWYtMWJlMGUxNzE4NjMyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 63, name: 'Tiempos de Oportunidad – Patología', authorities: [ADMIN,enlExt.ADMINISTRATIVOS.TIEMPO_OPORTUNIDAD_PATOLOGIA], url: 'https://app.powerbi.com/view?r=eyJrIjoiNDQ0YjQ5NGYtMjZmNS00OThjLWIzZDgtMmFjOWZkNzFkYjFiIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
  ],
  asistenciales: [
    {key: 14, name: 'OS - Enfermería', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_ENFERMERIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiYjQ1ZmMzMDEtM2Y0YS00OWYxLThmODgtM2JmMzg2MjZhMjg1IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 15, name: 'OS - Laboratorio clinico', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_LABORATORIO_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiM2Y2YzYxNzQtNGRmYS00OWVhLWE0MTgtNGI2MDkzNTViMWVjIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 16, name: 'OS - Consulta externa', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_CONSULTA_EXTERNA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiZjE1N2FiNzktODcwOC00YjBiLWI3MmUtNDdhZDY5YjlhMjc5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 17, name: 'OS - Gerencial', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_GERENCIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiYWY5NzMxMDktYmQ0OC00MzBlLWEwZjAtZDRlOGM4ZTg0ZWEyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 18, name: 'OS - Quimioterapia', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_QUIMIOTERAPIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjAzYjk0Y2UtNmFmZi00NDFjLTg1ZTItYWQ2ODNmZDliMWY4IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 19, name: 'OS - Terapias', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_TERAPIAS_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMzc1OWRlMTQtMmM0Mi00Yzc3LWJiMDUtYWYyZTMwMGU4Zjk4IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 20, name: 'OS - Traslados', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_TRASLADOS_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMjM4ZTIwNWQtYmI0Ny00NjU3LWFlOTYtMjNjNDA5ZGIzMzVkIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 21, name: 'OS - Gerencial', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_GENERAL_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiMWRhZjE3NTEtYjg4Yy00OWU3LWEzZDctOGQ5ZjVkNjVjMzg2IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 26, name: 'OS - Enfermería', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_ENFERMERIA_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiNWU3MTQ5OGQtODcxNy00NzljLTk1NGItNmZjMTBlZjE2MGEwIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 27, name: 'OS - Consulta externa', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_CONSULTA_EXTERNA_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiOTVjMjEzMjYtOTFjYy00ZjRmLTlhZjUtMmQwMTFjY2MyMWVmIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 28, name: 'OS - Laboratorio clinico', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_LABORATORIO_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiYmJjYjhlMDMtNWI2YS00MTdmLTg4ODUtMTg3YmZmMzE3NWQ2IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 43, name: 'OS - Gerencial', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_GERENCIALES_SANJUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiNjRlNDljMDQtNzg2Mi00ZDZiLThjY2UtMThkNzc1OGMyOTQyIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 44, name: 'Medicamentos pendientes por confirmar', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.MEDICAMENTOS_PENDIENTES_CONFIRMAR_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiNTlmNmYwMjYtZGEyNi00NmRjLWE1MDgtODY4MWE3YzFkNDI5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 49, name: 'OS - Gerencial', disableOnContexts: allContexts([ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.ASISTENCIALES.ORDENES_SERVICIO_GERENCIALES_VALLEDUPAR], url: 'https://app.powerbi.com/view?r=eyJrIjoiZjNlMTJiNzItNmU4Mi00ZDkyLWJiYWEtY2M5MDlhMjQ2YzcxIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
  ],
  centralCompras: [
    {key: 3, name: 'Gestión solicitudes de compra', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.CENTRAL_COMPRAS.ESTADISTICAS_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiY2I5NjFjYWQtMGMzNS00MzFjLTkwYWEtOGRkYzkyNjBiNTc5IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 35, name: 'Gestión solicitudes de compra', disableOnContexts: allContexts([ctxs.AMMEDICAL]).types, authorities: [ADMIN,enlExt.CENTRAL_COMPRAS.ESTADISTICAS_AMMEDICAL], url: 'https://app.powerbi.com/view?r=eyJrIjoiZGUwZDllOGUtYjYyNS00NTIxLTkxZDMtOGNmMWZkMGUxZGYxIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
  ],
  solicitudServicios: [
    {key: 23, name: 'Gestión solicitudes', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.SOLICITUD_SERVICIOS.GESTION_SOLICITUDES_ALTA_CENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiNjM2NzZiMmMtNDM3Zi00NzhmLTg0MTAtN2ZlMmY3YjIzMmYzIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 32, name: 'Gestión solicitudes', disableOnContexts: allContexts([ctxs.AGUACHICA]).types, authorities: [ADMIN,enlExt.SOLICITUD_SERVICIOS.GESTION_SOLICITUDES_AGUACHICA], url: 'https://app.powerbi.com/view?r=eyJrIjoiOTcwMjAzODgtOWM3MC00NGJmLTkwYjMtNzE3NTRhOTZlMmViIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 33, name: 'Gestión solicitudes', disableOnContexts: allContexts([ctxs.SANJUAN]).types, authorities: [ADMIN,enlExt.SOLICITUD_SERVICIOS.GESTION_SOLICITUDES_SAN_JUAN], url: 'https://app.powerbi.com/view?r=eyJrIjoiNmQzMDIxNmQtY2U5ZS00OTI0LWFkNTEtZGFkZGI5ODgyNTlhIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 34, name: 'Gestión solicitudes', disableOnContexts: allContexts([ctxs.VALLEDUPAR]).types, authorities: [ADMIN,enlExt.SOLICITUD_SERVICIOS.GESTION_SOLICITUDES_VALLEDUPAR], url: 'https://app.powerbi.com/view?r=eyJrIjoiYjg2MWU3NTgtZjgzNy00NTQwLWFlZTgtODE4NzFjOGE0NzIzIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
    {key: 60, name: 'Gestión solicitudes (todas las sedes)', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.SOLICITUD_SERVICIOS.GESTION_SOLICITUDES_TODAS_LAS_SEDES], url: 'https://app.powerbi.com/view?r=eyJrIjoiZmE3NzNkMTAtMjVhMC00NWJjLWI3MmYtYmYxMzJhZDllOTRjIiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
  ],
  hospitalizacion: [
    {key: 62, name: 'Estadisticas', disableOnContexts: allContexts([ctxs.ALTACENTRO]).types, authorities: [ADMIN,enlExt.HOSPITALIZACION.AUDITORIA_ALTACENTRO], url: 'https://app.powerbi.com/view?r=eyJrIjoiMDEyYWI3NDktYzgyOC00NTljLTllMGItNThlMDA3ZmYzMGQ3IiwidCI6IjkwMTFlZjAwLThlZmItNDhkZi1iYWZjLTNhZTFmZTg1OThjNyIsImMiOjR9'},
  ],
};


export const BIG_DATA_LINKS:EnlaceExternoI[] = [
  ...BIG_DATA_LINKS_DISCRIMINATED.administrativos, ...BIG_DATA_LINKS_DISCRIMINATED.asistenciales,
  ...BIG_DATA_LINKS_DISCRIMINATED.centralCompras, ...BIG_DATA_LINKS_DISCRIMINATED.solicitudServicios,
  ...BIG_DATA_LINKS_DISCRIMINATED.hospitalizacion
];

export const BIG_DATA_LINKS_COMPLEMENT = [
  { key: 1, icon: 'flask-conical', description: 'Indicadores de facturación y producción del laboratorio clínico.' },
  { key: 2, icon: 'stethoscope', description: 'KPIs y métricas de atención ambulatoria y consulta médica.' },
  { key: 4, icon: 'flask-conical', description: 'Indicadores del laboratorio clínico de la sede San Juan.' },
  { key: 5, icon: 'flask-conical', description: 'Indicadores del laboratorio clínico de la sede Valledupar.' },
  { key: 6, icon: 'users', description: 'Gestión de admisiones hospitalarias y flujo de pacientes.' },
  { key: 7, icon: 'activity', description: 'Indicadores de estudios diagnósticos por imágenes.' },
  { key: 8, icon: 'activity', description: 'Indicadores de procedimientos quirúrgicos y productividad.' },
  { key: 13, icon: 'shield-check', description: 'Auditoría clínica y administrativa de procesos.' },
  { key: 22, icon: 'wallet', description: 'Análisis de cartera vencida segmentada por antigüedad.' },
  { key: 24, icon: 'package', description: 'Facturación y consumo de inventario en AMMedical.' },
  { key: 31, icon: 'building-2', description: 'Indicadores estratégicos para presidencia y alta dirección.' },
  { key: 37, icon: 'pill', description: 'Consumo y suministro farmacéutico por paciente.' },
  { key: 52, icon: 'bed', description: 'Ocupación hospitalaria y distribución de camas.' },
  { key: 59, icon: 'activity', description: 'Seguimiento y control de transfusiones sanguíneas.' },
  { key: 61, icon: 'timer', description: 'Gestión de turnos y tiempos de atención CAPS.' },
  { key: 63, icon: 'flask-round', description: 'Indicadores de oportunidad diagnóstica en patología.' },
  { key: 14, icon: 'activity', description: 'Seguimiento a órdenes de servicio de enfermería.' },
  { key: 15, icon: 'flask-conical', description: 'Órdenes de laboratorio clínico y tiempos de respuesta.' },
  { key: 16, icon: 'stethoscope', description: 'Órdenes y productividad de consulta externa.' },
  { key: 18, icon: 'pill', description: 'Seguimiento a tratamientos oncológicos.' },
  { key: 20, icon: 'ambulance', description: 'Gestión de traslados de pacientes.' },
  { key: 3, icon: 'shopping-cart', description: 'Seguimiento y análisis de solicitudes de compra.' },
  { key: 23, icon: 'clipboard-list', description: 'Gestión y seguimiento de solicitudes de servicios.' },
  { key: 32, icon: 'clipboard-list', description: 'Gestión y seguimiento de solicitudes de servicios.' },
  { key: 33, icon: 'clipboard-list', description: 'Gestión y seguimiento de solicitudes de servicios.' },
  { key: 34, icon: 'clipboard-list', description: 'Gestión y seguimiento de solicitudes de servicios.' },
  { key: 60, icon: 'clipboard-list', description: 'Gestión y seguimiento de solicitudes de servicios.' },
  { key: 62, icon: 'bed-double', description: 'Indicadores de hospitalización y ocupación clínica.' },
];