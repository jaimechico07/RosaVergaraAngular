import { Component } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [NgIconsModule, CommonModule, RouterModule],
  templateUrl: './nav-mobile.component.html',
  styles: ``,
})
export class NavMobileComponent {
  isMenuOpen = false;
  isVisible = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // Si cerramos el menú, también cerramos el dropdown
    if (!this.isMenuOpen) {
      this.isVisible = false;
    }

    // Prevenir scroll del body cuando el menú está abierto
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isVisible = false;
    document.body.style.overflow = 'auto';
  }

  toggleDropdown() {
    this.isVisible = !this.isVisible;
  }
}
