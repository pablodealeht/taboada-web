import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <div class="container">
        <h1>Estudio Taboada</h1>
        <nav>
          <a routerLink="/">Inicio</a>
          <a routerLink="/blog">Blog</a>
          <a routerLink="/contacto">Contacto</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      background-color: #1a237e;
      color: white;
      padding: 1rem 0;
    }
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    nav a {
      color: white;
      text-decoration: none;
      margin-left: 1rem;
    }
  `]
})
export class HeaderComponent {}