import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgIconsModule } from '@ng-icons/core';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { NavMobileComponent } from './nav-mobile/nav-mobile.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule,
    NavDesktopComponent,
    NavMobileComponent,
  ],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {}
