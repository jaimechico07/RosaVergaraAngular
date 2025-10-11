import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { TargetComponent } from './sections/target/target.component';
import { ServicesComponent } from './sections/services/services.component';
import { ValuesComponent } from './sections/values/values.component';
import { ScheduleComponent } from './sections/schedule/schedule.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    TargetComponent,
    ServicesComponent,
    ValuesComponent,
    ScheduleComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
