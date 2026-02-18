import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAngularModule,
  Search,
  Bell,
  Settings,
  ChevronDown,
  LogOut,
  Menu,
} from 'lucide-angular';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss',
})
export class TopbarComponent {
  @Output() menuClicked = new EventEmitter<void>();

  readonly icons = { Search, Bell, Settings, ChevronDown, LogOut, Menu };
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }
}
