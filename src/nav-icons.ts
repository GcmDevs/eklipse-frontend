import { Component, input, computed } from '@angular/core';
import { Activity, ChartNoAxesCombined, LucideAngularModule, X } from 'lucide-angular';
import {
  type LucideIconData,
  ShieldCheck,
  Lock,
  Layers,
  UserCog,
  Users,
  FolderCog,
} from 'lucide-angular';

/**
 * Mapa de iconos keyed por su nombre kebab-case.
 * Para agregar un icono nuevo, solo importalo arriba y registralo aqui.
 */
const ICON_MAP: Record<string, LucideIconData> = {
  'shield-check': ShieldCheck,
  lock: Lock,
  layers: Layers,
  'user-cog': UserCog,
  users: Users,
  'folder-cog': FolderCog,
  'chart-no-axes-combined': ChartNoAxesCombined,
  x: X,
  activity: Activity,
};

@Component({
  selector: 'app-nav-icon',
  imports: [LucideAngularModule],
  template: `
    @if (iconData()) {
      <lucide-icon [img]="iconData()!" [size]="size()" />
    }
  `,
  styles: [':host { display: inline-flex; align-items: center; justify-content: center; }'],
})
export class NavIconComponent {
  name = input.required<string>();
  size = input(22);

  iconData = computed(() => ICON_MAP[this.name()] ?? null);
}
