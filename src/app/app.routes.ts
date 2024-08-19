import { Routes } from "@angular/router";
import { authGuard } from "./core/auth/guards/auth.guard";
import { RoomsComponent } from "./features/rooms/rooms/rooms.component";
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
  { path: "rooms", loadChildren: () =>
    import("./features/rooms/rooms.routes").then((mod) => mod.ROOMS_ROUTES), },
  { path: "room/:name", component: MainComponent },
];
