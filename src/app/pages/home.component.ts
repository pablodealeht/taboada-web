import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container">
      <h2>Bienvenidos al Estudio Taboada</h2>
      <p>Somos un estudio de abogados especializado en derecho penal, civil y laboral en Argentina.</p>
      <h3>Nuestras áreas de práctica:</h3>
      <div class="card-container">
        <div class="card" *ngFor="let area of areas">
          <h3>{{ area.title }}</h3>
          <p>{{ area.description }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      color: var(--primary-color);
      text-align: center;
    }
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
    .card h3 {
      color: var(--secondary-color);
    }
  `]
})
export class HomeComponent {
  areas = [
    { title: 'Derecho Penal', description: 'Defendemos sus derechos en casos penales con experiencia y dedicación.' },
    { title: 'Derecho Civil', description: 'Asesoramiento integral en asuntos civiles para proteger sus intereses.' },
    { title: 'Derecho Laboral', description: 'Expertos en relaciones laborales y defensa de derechos del trabajador.' }
  ];
}