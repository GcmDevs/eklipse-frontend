import { Component, computed } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { StatsRowComponent } from './stats-row/stats-row.component';
import { TasksGridComponent } from './tasks-grid/tasks-grid.component';
import { BottomSectionComponent } from './bottom-section/bottom-section.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TopbarComponent,
    StatsRowComponent,
    TasksGridComponent,
    BottomSectionComponent,
    SidebarComponent,
  ],
  templateUrl: './component.html',
  styleUrl: './component.scss',
})
export class DashboardComponent {
  sidebarOpen = false;

  greeting = computed(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos dias';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  });

  openSidebar(): void {
    this.sidebarOpen = true;
  }

  closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
