import { Route } from "@angular/router";
import { CreateRoomComponent } from "./create-room/create-room.component";
import { RoomsComponent } from "./rooms/rooms.component";

export const ROOMS_ROUTES: Route[] = [
  // {path: '**', redirectTo: '', pathMatch: 'full'},
  {path: 'create-room', component: CreateRoomComponent},
  {path: '', component: RoomsComponent}
];