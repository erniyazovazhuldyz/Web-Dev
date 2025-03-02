import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>My Angular App</h1>
    <nav>
      <a routerLink="/home">Home</a> |
      <a routerLink="/about">About</a> |
      <a routerLink="/albums">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-albums-app';
}