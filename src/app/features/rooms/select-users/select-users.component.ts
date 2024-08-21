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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {
  HlmTableComponent,
  HlmTrowComponent,
  HlmTdComponent,
  HlmCaptionComponent,
} from '@spartan-ng/ui-table-helm';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { UserService } from '../../../core/auth/services/user.service';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
@Component({
  selector: 'app-select-users',
  standalone: true,
  imports: [
    HlmTableComponent,
    HlmTrowComponent,
    HlmTdComponent,
    HlmCaptionComponent,
    HlmInputDirective,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    HlmButtonDirective,
    ///remove:
  ],
  templateUrl: './select-users.component.html',
  styleUrl: './select-users.component.scss',
})
export class SelectUsersComponent implements OnInit {
  SearchUser() {
    console.log(this.filteredUsers);
    console.log(this.searchUsername.value);
    
    
  }

  @Input() users: UserI[] = [];
  @Output() addUser: EventEmitter<UserI> = new EventEmitter<UserI>();
  @Output() removeUser: EventEmitter<UserI> = new EventEmitter<UserI>();
  selectedUser: UserI | null = null;

  @ViewChild('search') search!: ElementRef<HTMLInputElement>;
  ngOnInit(): void {
 
 console.log('init');
 
    this.searchUsername.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((username: string) => this.userService.findByUsername(username).pipe(
        tap((users: UserI[]) => this.filteredUsers = users)
      ))
    ).subscribe();
  }

  constructor(private userService: UserService) {}

  searchUsername = new FormControl();

  filteredUsers: UserI[] = [];
  addUserToForm() {
    console.log('addUserToForm');
    
    this.addUser.emit(this.selectedUser!);
    this.filteredUsers = [];
    this.selectedUser = null;
    this.searchUsername.setValue(null);
  }

  removeUserFromForm(user: UserI) {
    console.log('removeUserFromForm');
    
    this.removeUser.emit(user);
  }

  setSelectedUser(user: UserI) {
    console.log('setSelectedUser');
    
    this.selectedUser = user;
  }

  displayFn(user: UserI) {
    if(user) {
      return user.username;
    } else {
      return '';
    }
  }
}
