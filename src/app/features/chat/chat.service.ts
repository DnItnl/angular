import { Injectable } from '@angular/core';
import { CustomSocket } from '../../shared/sockets/custom-socket';
import { RoomI, RoomPaginateI } from '../../shared/models/room.interface';
import { UserI } from '../../shared/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  socket: CustomSocket;
  constructor() {
    this.socket = new CustomSocket();
  }

  sendMessage() {}
  getMessage() {
    return this.socket.fromEvent('message');
  }

  getMyRooms() {
    return this.socket.fromEvent<RoomPaginateI>('rooms');
  }


  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', {limit, page});
  }

  createRoom(){
    // this.socket.emit('createRoom', room)
  }


}
