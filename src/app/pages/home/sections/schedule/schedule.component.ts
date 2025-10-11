import { Component, OnInit } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [NgIconsModule, CommonModule],
  templateUrl: './schedule.component.html',
  styles: ``,
})
export class ScheduleComponent implements OnInit {
  currentDay: string = '';

  ngOnInit() {
    this.setCurrentDay();
  }

  days = [
    { name: 'Lunes', hours: '08:00 - 18:00' },
    { name: 'Martes', hours: '08:00 - 18:00' },
    { name: 'Miércoles', hours: '08:00 - 18:00' },
    { name: 'Jueves', hours: '08:00 - 18:00' },
    { name: 'Viernes', hours: '08:00 - 18:00' },
    { name: 'Sábado', hours: '08:00 - 18:00' },
    { name: 'Domingo', hours: '08:00 - 14:00' },
  ];

  private setCurrentDay() {
    const today = new Date();
    this.currentDay = today.toLocaleDateString('es-ES', { weekday: 'long' });

    this.currentDay =
      this.currentDay.charAt(0).toUpperCase() + this.currentDay.slice(1);
  }

  isToday(dayName: string): boolean {
    return dayName === this.currentDay;
  }

  getDayCardClasses(dayName: string): string {
    const baseClasses =
      'flex flex-col items-center gap-3 rounded-xl shadow-md px-6 py-4 min-w-[120px] transition-all duration-300 relative';

    if (this.isToday(dayName)) {
      return `${baseClasses} border-2 border-primary-700  scale-110 `;
    } else {
      return `${baseClasses}  hover:scale-105 shadow-primary-gray-100`;
    }
  }
}
