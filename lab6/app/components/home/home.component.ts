import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Welcome to the Home Page!</h2>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}