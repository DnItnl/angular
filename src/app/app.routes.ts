import { Routes } from "@angular/router";
import { authGuard } from "./core/auth/guards/auth.guard";
import { DashboardComponent } from "./features/chat/chats-list/chats-list.component";
import { MainComponent } from "./features/main/main.component";

export const routes: Routes = [
  {
    path: "private",
    canActivate: [authGuard],
    loadChildren: () =>
      import("./features/private/private.routes").then(
        (mod) => mod.PRIVATE_ROUTES,
      ),
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./core/auth/auth.routes").then((mod) => mod.AUTH_ROUTES),
  },
  { path: "rooms/:page", component: DashboardComponent },
  { path: "rooms", redirectTo: 'rooms/1' },
  { path: "room/:name", component: MainComponent },
];
