import {
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ElementRef,
  Component,
  Input,
  signal,
} from '@angular/core';
import { SessionStore } from '@stores/session';
import { TakModal } from '@kato-lee/components/modal';
import { MatDialog } from '@angular/material/dialog';
import { CentrosStore } from '@stores/centros';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Feature {
  icon: SafeHtml;
  title: string;
  desc: string;
}

@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  selector: 'app-home-page',
  templateUrl: './page.html',
  styleUrl: './page.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  @Input() clinicName = 'Grupo Clinica Medicos';
  @Input() sedeName = 'Alta Complejidad / Medicos Centro';
  @Input() userName = 'Usuario';

  FEATURES: Feature[] = [
    /* {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M3 3h18v18H3z"/><path d="M9 9h6v6H9z"/>
    </svg>`,
      title: 'Home',
      desc: 'Panel principal con acceso rápido a métricas, accesos directos y notificaciones del sistema.',
    }, */
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 017 7v2l2 2v2H3v-2l2-2V9a7 7 0 017-7z"/>
    </svg>`,
      title: 'Gemi',
      desc: 'Asistente inteligente para soporte clínico, consultas rápidas y automatización de tareas.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 20V10M8 20V4M16 20v-8"/>
    </svg>`,
      title: 'Costos y planeación',
      desc: 'Control de costos hospitalarios, planeación financiera y análisis presupuestal en tiempo real.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M3 3v18h18"/><path d="M7 15l4-4 4 4 4-6"/>
    </svg>`,
      title: 'Indicadores de operación',
      desc: 'KPIs clínicos, productividad hospitalaria y métricas de calidad del servicio.',
    },
    /* {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 3l8 4v6c0 5-8 8-8 8s-8-3-8-8V7l8-4z"/>
    </svg>`,
      title: 'Seguridad',
      desc: 'Gestión de roles, permisos, auditorías y control de accesos del sistema.',
    }, */
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/><path d="M19.4 15a7.97 7.97 0 000-6M4.6 9a7.97 7.97 0 000 6"/>
    </svg>`,
      title: 'General',
      desc: 'Configuración global del sistema, catálogos maestros y parámetros institucionales.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M3 7v10M21 7v10M4 12h16M7 9h3M14 9h3"/>
    </svg>`,
      title: 'Hospitalización',
      desc: 'Gestión de camas, admisiones, traslados y egresos de pacientes hospitalizados.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M3 3h18v18H3z"/><path d="M7 7h10M7 11h10M7 15h10"/>
    </svg>`,
      title: 'Historia Clínica',
      desc: 'Registro clínico del paciente, evolución médica, órdenes y antecedentes médicos.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 1v22M5 5h14M5 19h14"/>
    </svg>`,
      title: 'Facturación',
      desc: 'Facturación hospitalaria, cuentas médicas, RIPS y control de ingresos.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M12 2v20M2 12h20"/>
    </svg>`,
      title: 'Cartera',
      desc: 'Gestión de cartera, pagos, glosas, recaudo y cuentas por cobrar.',
    },
    {
      icon: `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M3 7h18M3 12h18M3 17h18"/>
    </svg>`,
      title: 'Inventario',
      desc: 'Control de insumos médicos, farmacia, bodegas y stock hospitalario.',
    },
  ];

  FEATURES_TRANSFORMED = signal(false);

  constructor(
    href: ElementRef<HTMLElement>,
    sanitizer: DomSanitizer,
    private _session: SessionStore,
    private _centros: CentrosStore,
    private _router: Router,
    private _modal: TakModal,
    private _dialog: MatDialog,
  ) {
    href.nativeElement.classList.add('app-home-page');

    this.FEATURES.map((f) => {
      f.icon = sanitizer.bypassSecurityTrustHtml(f.icon as any as string);
    });

    this.FEATURES_TRANSFORMED.set(true);
  }
}
