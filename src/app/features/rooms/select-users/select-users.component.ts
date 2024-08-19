import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserI } from '../../../shared/models/user.interface';
import { FormControl } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  BrnPopoverCloseDirective,
  BrnPopoverComponent,
  BrnPopoverContentDirective,
  BrnPopoverTriggerDirective,
} from '@spartan-ng/ui-popover-brain';
import { HlmPopoverCloseDirective, HlmPopoverContentDirective } from '@spartan-ng/ui-popover-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
@Component({
  selector: 'app-select-users',
  standalone: true,
  imports: [HlmInputDirective,



    ///remove:
    BrnPopoverComponent,
    BrnPopoverTriggerDirective,
    BrnPopoverContentDirective,
    BrnPopoverCloseDirective,
    HlmPopoverContentDirective,
    HlmPopoverCloseDirective,
    HlmButtonDirective,
    HlmLabelDirective,
  ],
  templateUrl: './select-users.component.html',
  styleUrl: './select-users.component.scss'
})
export class SelectUsersComponent {
  @Input() users: UserI[] = []
  @Output() addUser: EventEmitter<UserI> = new EventEmitter<UserI>();
  @Output() removeUser: EventEmitter<UserI> = new EventEmitter<UserI>();

  searchUsername = new FormControl();

  filteredUsers: UserI[] = [];

}
