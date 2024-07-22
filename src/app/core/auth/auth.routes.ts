import { Route } from "@angular/router";
import { AuthComponent } from "./page/auth.component";

export const AUTH_ROUTES: Route[] = [
  {path: '', component: AuthComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];