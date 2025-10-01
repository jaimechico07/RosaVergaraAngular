import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgIconsModule } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconsModule],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  isVisible: boolean = false;

  toggleDropdown() {
    this.isVisible = !this.isVisible;
  }
}
