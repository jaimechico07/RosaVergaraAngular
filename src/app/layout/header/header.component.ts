import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  isVisible: boolean = false;

  constructor(private eRef: ElementRef) {}

  toggleDropdown() {
    this.isVisible = !this.isVisible;
  }
}
