import { Routes } from "@angular/router";
import { authGuard } from "./core/auth/guards/auth.guard";
import { RoomsComponent } from "./features/rooms/rooms/rooms.component";
import { MainComponent } from "./features/main/main.component";

export const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./core/auth/auth.routes").then((mod) => mod.AUTH_ROUTES),
  },
  { path: "rooms",
    canActivate: [authGuard], loadChildren: () =>
    import("./features/rooms/rooms.routes").then((mod) => mod.ROOMS_ROUTES), },
  { path: "room/:name", component: MainComponent },
];
