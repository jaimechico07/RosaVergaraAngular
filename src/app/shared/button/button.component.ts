import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  @Input() label = 'Botón';
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
