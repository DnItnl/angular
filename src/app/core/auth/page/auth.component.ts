
import {
  Component,
  ElementRef,
  HostBinding,
  ViewChild,
} from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs';
import { HlmTabsComponent, HlmTabsContentDirective, HlmTabsListComponent, HlmTabsTriggerDirective } from '@spartan-ng/ui-tabs-helm';
import { HlmCardContentDirective, HlmCardDescriptionDirective, HlmCardDirective, HlmCardFooterDirective, HlmCardHeaderDirective, HlmCardTitleDirective } from '@spartan-ng/ui-card-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnDialogContentDirective, BrnDialogTriggerDirective } from '@spartan-ng/ui-dialog-brain';
import { HlmDialogComponent, HlmDialogContentComponent, HlmDialogDescriptionDirective, HlmDialogFooterComponent, HlmDialogHeaderComponent, HlmDialogTitleDirective } from '@spartan-ng/ui-dialog-helm';
import { HlmToasterComponent } from '@spartan-ng/ui-sonner-helm';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CustomValidators } from '../../../shared/helpers/custom-validators';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    HlmTabsComponent,
    HlmTabsListComponent,
    HlmTabsTriggerDirective,
    HlmTabsContentDirective,

    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,

    HlmLabelDirective,
    HlmInputDirective,
    HlmButtonDirective,
    BrnDialogTriggerDirective,
    BrnDialogContentDirective,

    HlmDialogComponent,
    HlmDialogContentComponent,
    HlmDialogHeaderComponent,
    HlmDialogFooterComponent,
    HlmDialogTitleDirective,
    HlmDialogDescriptionDirective,

    HlmToasterComponent,

    ReactiveFormsModule,
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  //#region descriptions
  protected createDescriptions: string[] = [
    'Embark on a new journey with us, start now.',
    'Join us today and discover a world of opportunities.',
    'Unlock a new realm of possibilities.',
    'Begin your new adventure here.',
  ];
  protected loginDescriptions: string[] = [
    'Step back into your personalized space.',
    'Welcome back! Ready to explore more?',
    'Reconnect with your experience.',
    'Dive back into your world.',
  ];
  protected createDescription: string = '';
  protected loginDescription: string = '';
  //#endregion
  //#region forms
  registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    {
      validators: CustomValidators.passwordsMatching,
    }
  );
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  // loginForm: any;
  //#endregion

  @ViewChild('loginTab') loginTab!: ElementRef<HTMLButtonElement>;

  constructor(
    private userService: UserService,
    private authService: AuthService, 
    private router: Router
  ) {
    this.createDescription =
      this.createDescriptions[
        Math.floor(Math.random() * this.createDescriptions.length)
      ];
    this.loginDescription =
      this.loginDescriptions[
        Math.floor(Math.random() * this.loginDescriptions.length)
      ];
  }


  login() {
    if(this.loginForm.valid){
      this.authService.login({
        email: this.lEmail.value,
        password: this.lPassword.value
      }).pipe(
        tap(() => this.router.navigate(['rooms']))
      ).subscribe()
      
    }
  }
  register() {    
    if(this.registerForm.valid){
      this.userService.create(this.registerForm.value)
      .subscribe((a) => {
        // this.router.navigate(['/']);
        this.loginTab.nativeElement.click();
        this.loginForm.setValue({
          email: this.registerForm.value.email,
          password: this.registerForm.value.password
        });
      });
    }
  }

  get rEmail(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get lEmail(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get rName(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get lName(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get lPassword(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  get rPassword(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get rPasswordConfirm(): FormControl {
    return this.registerForm.get('passwordConfirm') as FormControl;
  }



}
