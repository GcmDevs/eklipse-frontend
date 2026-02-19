import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DashboardConfig, NAVIGATION_CONFIG, NavModule } from '@aside/config';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { NavIconComponent } from 'src/nav-icons';
import { ValidateAccessPipe } from 'src/functions';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, LucideAngularModule, NavIconComponent, ValidateAccessPipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges {
  @Input({ required: true }) config!: DashboardConfig;
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();

  modules: NavModule[] = NAVIGATION_CONFIG;

  expandedModule: string | null = null;
  expandedSubmodule: string | null = null;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open) {
      this.closed.emit();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      if (this.open) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }

  toggleModule(id: string): void {
    this.expandedModule = this.expandedModule === id ? null : id;
    this.expandedSubmodule = null;
  }

  toggleSubmodule(moduleId: string, subId: string): void {
    const key = `${moduleId}-${subId}`;
    this.expandedSubmodule = this.expandedSubmodule === key ? null : key;
  }

  isModuleOpen(id: string): boolean {
    return this.expandedModule === id;
  }

  isSubmoduleOpen(moduleId: string, subId: string): boolean {
    return this.expandedSubmodule === `${moduleId}-${subId}`;
  }

  onOverlayClick(): void {
    this.closed.emit();
  }

  onCloseClick(): void {
    this.closed.emit();
  }

  onRouteClick(event: Event): void {
    event.preventDefault();
    this.closed.emit();
  }
}
