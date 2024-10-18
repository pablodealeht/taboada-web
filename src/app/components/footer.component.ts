import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <p>&copy; 2023 Estudio Taboada. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #1a237e;
      color: white;
      padding: 1rem 0;
      text-align: center;
    }
  `]
})
export class FooterComponent {}