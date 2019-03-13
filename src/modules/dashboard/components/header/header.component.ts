import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <h1>Servicios</h1>
      <nav class="nav">
        <a class="nav-link active" href="#">Todos</a>
        <a class="nav-link" href="#">Autos</a>
        <a class="nav-link" href="#">Salud</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Hogar</a>
      </nav>
    </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}
}
