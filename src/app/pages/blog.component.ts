import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h2>Blog de Información Legal</h2>
      <div class="card-container">
        <article class="card" *ngFor="let post of blogPosts">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <a href="#" class="read-more">Leer más</a>
        </article>
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
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }
    .card h3 {
      color: var(--secondary-color);
    }
    .read-more {
      display: inline-block;
      margin-top: 10px;
      color: var(--primary-color);
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class BlogComponent {
  blogPosts = [
    {
      title: 'Novedades en el Derecho Laboral Argentino',
      excerpt: 'Recientes cambios en la legislación laboral y cómo afectan a empleadores y empleados.'
    },
    {
      title: 'Guía para entender el proceso penal',
      excerpt: 'Una explicación paso a paso del proceso penal en Argentina para no abogados.'
    },
    {
      title: 'Derechos del consumidor: Lo que debes saber',
      excerpt: 'Información esencial sobre tus derechos como consumidor en Argentina.'
    }
  ];
}