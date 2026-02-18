import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Home,
  ChevronRight,
  ArrowLeft,
  Layers,
  LayoutGrid,
  CheckCircle2,
  ShieldCheck,
  Lock,
  UserCog,
  Users,
} from 'lucide-angular';

@Component({
  selector: 'app-crear-modulos',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './crear-modulos.component.html',
  styleUrl: './crear-modulos.component.scss',
})
export class CrearModulosComponent {
  readonly icons = {
    Home,
    ChevronRight,
    ArrowLeft,
    Layers,
    LayoutGrid,
    CheckCircle2,
    ShieldCheck,
    Lock,
    UserCog,
    Users,
  };
}
