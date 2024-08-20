import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UserI } from '../../../shared/models/user.interface';
import { FormControl, FormsModule } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import {
  HlmPopoverCloseDirective,
  HlmPopoverContentDirective,
} from '@spartan-ng/ui-popover-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-select-users',
  standalone: true,
  imports: [
    HlmInputDirective,
    FormsModule,
    AsyncPipe
    ///remove:
  ],
  templateUrl: './select-users.component.html',
  styleUrl: './select-users.component.scss',
})
export class SelectUsersComponent implements OnInit, AfterViewInit {
  SearchUser() {
    console.log(    this.searchUsernameInput.length
    );
  }

  @Input() users: UserI[] = [];
  @Output() addUser: EventEmitter<UserI> = new EventEmitter<UserI>();
  @Output() removeUser: EventEmitter<UserI> = new EventEmitter<UserI>();

  @ViewChild('search') search!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    console.log(this.search);
  }

  searchUsername = new FormControl();
  public searchUsernameInput : String ="";

  filteredUsers: UserI[] = [{
    id:1, username: 'test', email: 'test', password: 'test'
  },{
    id:2, username: 'test', email: 'test', password: 'test'
  },{
    id:1, username: 'test', email: 'test', password: 'test'
  },{
    id:2, username: 'test', email: 'test', password: 'test'
  },{
    id:1, username: 'test', email: 'test', password: 'test'
  },{
    id:2, username: 'test', email: 'test', password: 'test'
  },{
    id:1, username: 'test', email: 'test', password: 'test'
  },{
    id:2, username: 'test', email: 'test', password: 'test'
  },{
    id:1, username: 'test', email: 'test', password: 'test'
  },{
    id:2, username: 'test', email: 'test', password: 'test'
  }
];
}
