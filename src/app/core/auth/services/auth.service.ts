
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseI } from '../../../shared/models/login-response.interface';
import { UserI } from '../../../shared/models/user.interface';
import { Observable, tap } from 'rxjs';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  login(user: UserI): Observable<LoginResponseI> {
    return this.http.post<LoginResponseI>('nest/users/login', user).pipe(
      tap((response: LoginResponseI)=> localStorage.setItem('nest-token', response.access_token)),
      tap(()=>       toast("Login successfully", {
        description:  "Welcome back!",
        action: {
          label: 'close',
          onClick: () => console.log('close'),
        }
      }))
    );
  }
}
