import { Component } from '@angular/core';
import { HeroComponent } from './sections/hero/hero.component';
import { TargetComponent } from './sections/target/target.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, TargetComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
