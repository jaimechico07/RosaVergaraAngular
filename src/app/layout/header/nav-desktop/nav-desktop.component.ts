import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-desktop',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconsModule],
  templateUrl: './nav-desktop.component.html',
  styles: ``,
})
export class NavDesktopComponent {
  isVisible: boolean = false;

  toggleDropdown() {
    this.isVisible = !this.isVisible;
  }
}
