import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <h1>Servicios</h1>
      <nav class="nav header__nav">
        <a routerLink="/todos" routerLinkActive="active" class="nav-link" href="#">Todos</a>
        <a routerLink="/autos" routerLinkActive="active" class="nav-link" href="#">Autos</a>
        <a routerLink="/salud" routerLinkActive="active" class="nav-link" href="#">Salud</a>
        <a routerLink="/hogar" routerLinkActive="active" class="nav-link" href="#">Hogar</a>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}
}
