import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  HlmTableComponent,
  HlmTrowComponent,
  HlmThComponent,
  HlmTdComponent,
  HlmCaptionComponent,
} from '@spartan-ng/ui-table-helm';
import { MatCardModule } from '@angular/material/card';

import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import {
  HlmPaginationDirective,
  HlmPaginationContentDirective,
  HlmPaginationItemDirective,
  HlmPaginationPreviousComponent,
  HlmPaginationNextComponent,
  HlmPaginationLinkDirective,
  HlmPaginationEllipsisComponent,
} from '@spartan-ng/ui-pagination-helm';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RoomI, RoomPaginateI } from '../../../shared/models/room.interface';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-chats-list',
  standalone: true,
  imports: [

    
    RouterLink,
    MatPaginatorModule,
    MatListModule,
    JsonPipe,
    MatCardModule,
    // pagi
    HlmPaginationDirective,
    HlmPaginationContentDirective,
    HlmPaginationItemDirective,
    HlmPaginationPreviousComponent,
    HlmPaginationNextComponent,
    HlmPaginationLinkDirective,
    HlmPaginationEllipsisComponent,
    // table
    AsyncPipe,
    HlmTableComponent,
    HlmTrowComponent,
    HlmThComponent,
    HlmTdComponent,
    HlmCaptionComponent,
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
  host: {
    class: 'w-full overflow-x-auto',
  },
})
export class RoomsComponent implements OnInit {
  protected rooms$: Observable<RoomPaginateI> = this.chatService.getMyRooms();

  selectedRoom = null;

  ngOnInit(): void {
    
    this.chatService.emitPaginateRooms(10, 0);
    // this.chatService.createRoom();
  }

  constructor(private chatService: ChatService) {}

  ngAfterViewInit() {
    this.chatService.emitPaginateRooms(10, 0);
  }

  onSelectRoom(event: MatSelectionListChange) {
    this.selectedRoom = event.source.selectedOptions.selected[0].value;
  }

  onPaginateRooms(pageEvent: PageEvent) {
    console.log(pageEvent);
    
    this.chatService.emitPaginateRooms(pageEvent.pageSize, pageEvent.pageIndex);
  }
}
