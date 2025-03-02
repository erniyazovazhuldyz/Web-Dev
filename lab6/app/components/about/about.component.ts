import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>About Us</h2>`,
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {}