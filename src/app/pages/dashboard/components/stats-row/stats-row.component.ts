import { Component } from '@angular/core';
import { LucideAngularModule, Users, CalendarCheck, Activity, ShieldCheck } from 'lucide-angular';

@Component({
  selector: 'app-stats-row',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './stats-row.component.html',
  styleUrl: './stats-row.component.scss',
})
export class StatsRowComponent {
  readonly stats = [
    {
      icon: Users,
      label: 'Usuarios activos',
      value: '142',
      badge: '+12%',
      badgeType: 'up' as const,
      iconAccent: 'teal',
    },
    {
      icon: CalendarCheck,
      label: 'Citas hoy',
      value: '38',
      badge: '+5%',
      badgeType: 'up' as const,
      iconAccent: 'amber',
    },
    {
      icon: Activity,
      label: 'Modulos activos',
      value: '6',
      badge: '54 rutas',
      badgeType: 'neutral' as const,
      iconAccent: 'blue',
    },
    {
      icon: ShieldCheck,
      label: 'Roles definidos',
      value: '8',
      badge: 'Estable',
      badgeType: 'neutral' as const,
      iconAccent: 'green',
    },
  ];
}
