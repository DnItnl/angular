import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

export function tokenGetter(): string {
    let token=localStorage.getItem('nest-token');
    return  token!=null ? token : "";
  }

@Injectable({providedIn: 'root'})
export class CustomSocket extends Socket{
    constructor(){
        super({
            url: 'http://localhost:3000',
            options: {
              extraHeaders: {
                Authorization: tokenGetter(),
              },
            },
          })
    }
}