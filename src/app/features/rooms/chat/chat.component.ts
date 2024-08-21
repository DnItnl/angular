import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { MessagePaginateI } from '../../../shared/models/message.interface';
import { RoomI } from '../../../shared/models/room.interface';
import { ChatService } from '../chat.service';
import { MessageComponent } from "./message/message.component";
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MessageComponent, MatFormFieldModule, MatInputModule, MatIconModule, FormsModule, DatePipe, ReactiveFormsModule, AsyncPipe],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit, OnChanges, OnDestroy {

  @Input() chatRoom!: RoomI;


  messages$: Observable<MessagePaginateI> = this.chatService.getMessages();

  chatMessage: FormControl = new FormControl(null, [Validators.required]);

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.chatRoom) {
      this.chatService.joinRoom(this.chatRoom);
    }
  }

  ngOnDestroy() {
    this.chatService.leaveRoom(this.chatRoom);
  }

  sendMessage() {
    this.chatService.sendMessage({text: this.chatMessage.value, room: this.chatRoom});
    this.chatMessage.reset();
  }

}
