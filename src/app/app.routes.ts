import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LandingComponent } from './pages/landing/landing.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { EntradaComponent } from './pages/blog/entrada/entrada.component';
import { LogComponent } from './pages/log/log.component';

export const routes: Routes = [
  {path: '', redirectTo: '/shriners', pathMatch: 'full'},
  {path: 'shriners', component: LandingComponent},
  {path: 'shriners/eventos', component: EventosComponent},
  {path: 'shriners/blog', component: BlogComponent},
  {path: 'shriners/blog/entrada/:id', component: EntradaComponent},
  {path: 'shriners/D2zGKvxU', component: LogComponent},
  {path: '**', component: NotFoundComponent}
];
