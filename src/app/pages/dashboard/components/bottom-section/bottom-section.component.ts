import { Component } from '@angular/core';
import {
  LucideAngularModule,
  ChevronRight,
  ShieldCheck,
  UserPlus,
  FileText,
  Layers,
  Users,
  Settings,
} from 'lucide-angular';

@Component({
  selector: 'app-bottom-section',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './bottom-section.component.html',
  styleUrl: './bottom-section.component.scss',
})
export class BottomSectionComponent {
  readonly icons = { ChevronRight, ShieldCheck, UserPlus, FileText, Layers, Users, Settings };

  readonly activityItems = [
    { text: 'Se asignaron permisos al rol "Medico General"', time: 'Hace 2h', dot: 'teal' },
    { text: 'Nuevo usuario registrado: Dra. Maria Lopez', time: 'Hace 4h', dot: 'amber' },
    { text: 'Modulo Farmacia actualizado con 3 nuevas rutas', time: 'Hace 6h', dot: 'blue' },
  ];

  readonly quickLinks = [
    { label: 'Crear modulos y permisos', icon: Layers },
    { label: 'Gestionar usuarios', icon: Users },
    { label: 'Configuracion del sistema', icon: Settings },
  ];
}
