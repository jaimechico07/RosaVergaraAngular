import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { TargetComponent } from './sections/target/target.component';
import { ServicesComponent } from './sections/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, TargetComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
