import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './app/components/header.component';
import { FooterComponent } from './app/components/footer.component';
import { HomeComponent } from './app/pages/home.component';
import { BlogComponent } from './app/pages/blog.component';
import { ContactComponent } from './app/pages/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contacto', component: ContactComponent },
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});