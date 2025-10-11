import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconsModule, RouterModule],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {}
