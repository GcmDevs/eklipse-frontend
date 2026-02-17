import { Component, computed } from '@angular/core';
import { TopbarComponent } from '../../layout/topbar/topbar.component';
import { StatsRowComponent } from './components/stats-row/stats-row.component';
import { TasksGridComponent } from './components/tasks-grid/tasks-grid.component';
import { BottomSectionComponent } from './components/bottom-section/bottom-section.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopbarComponent, StatsRowComponent, TasksGridComponent, BottomSectionComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  greeting = computed(() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Buenos dias';
    if (hour < 18) return 'Buenas tardes';
    return 'Buenas noches';
  });
}
