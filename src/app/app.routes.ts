
import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {path: 'private', canActivate: [authGuard],   loadChildren: () => import('./features/private/private.routes').then(mod => mod.PRIVATE_ROUTES)},
  {path: 'auth', loadChildren: () => import('./core/auth/auth.routes').then(mod => mod.AUTH_ROUTES)},
];
