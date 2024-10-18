import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="container">
      <h2>Contacto</h2>
      <div class="card">
        <form (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" [(ngModel)]="contactForm.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" [(ngModel)]="contactForm.email" required>
          </div>
          <div class="form-group">
            <label for="area">Área de consulta:</label>
            <select id="area" name="area" [(ngModel)]="contactForm.area" required>
              <option value="penal">Penal</option>
              <option value="civil">Civil</option>
              <option value="laboral">Laboral</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">Descripción de la consulta:</label>
            <textarea id="message" name="message" [(ngModel)]="contactForm.message" required></textarea>
          </div>
          <button type="submit">Enviar consulta</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      color: var(--primary-color);
      text-align: center;
    }
    .card {
      max-width: 500px;
      margin: 0 auto;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--secondary-color);
    }
    input, select, textarea {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      background-color: var(--primary-color);
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
    button:hover {
      background-color: var(--secondary-color);
    }
  `]
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    area: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.contactForm);
    // Aquí se implementaría la lógica para enviar el formulario al servidor
    alert('Gracias por su consulta. Nos pondremos en contacto pronto.');
    this.contactForm = {name: '', email: '', area: '', message: ''};
  }
}