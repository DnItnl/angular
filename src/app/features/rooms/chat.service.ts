import { Injectable } from '@angular/core';
import { CustomSocket } from '../../shared/sockets/custom-socket';
import { RoomI, RoomPaginateI } from '../../shared/models/room.interface';
import { UserI } from '../../shared/models/user.interface';
import { Observable } from 'rxjs';
import { toast } from 'ngx-sonner';
import { dateOptions } from '../../core/auth/services/user.service';
import { MessageI, MessagePaginateI } from '../../shared/models/message.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  socket: CustomSocket;
  constructor() {
    this.socket = new CustomSocket();
  }

  sendMessage(message: MessageI) {
    this.socket.emit('addMessage', message);
  }
  joinRoom(room: RoomI) {
    this.socket.emit('joinRoom', room);
  }

  leaveRoom(room: RoomI) {
    this.socket.emit('leaveRoom', room);
  }

  getMessages(): Observable<MessagePaginateI> {
    return this.socket.fromEvent<MessagePaginateI>('messages');
  }
  getMyRooms(): Observable<RoomPaginateI> {
    return this.socket.fromEvent<RoomPaginateI>('rooms');
  }

  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', {limit: limit, page: page});
  }

  createRoom(room: RoomI){
    this.socket.emit('createRoom', room);

      toast('Room '+room.name+' created successfully', {
      description: new Date().toLocaleDateString('en-US', dateOptions),
      action: {

        label: 'close',
        onClick: () => console.log('close'),
      }
    })
  }
  
  
}
