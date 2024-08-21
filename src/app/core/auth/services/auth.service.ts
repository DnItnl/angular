
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseI } from '../../../shared/models/login-response.interface';
import { UserI } from '../../../shared/models/user.interface';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }



  login(user: UserI): Observable<LoginResponseI> {
    // 'nest/users/login'
    return this.http.post<LoginResponseI>('http://localhost:3000/nest/users/login', user).pipe(
      tap((response: LoginResponseI)=> {localStorage.setItem('nest-token', response.access_token)
        this.showToast('Login successful', 'Welcome ' + user.username);
      }),
      catchError((error) => {
        
        this.showToast('Login failed', error.error.message);
        return throwError(error);
      })
    );
  }

  verifyJWT() {
    return this.http.get('http://localhost:3000/nest/auth');
  }


  private showToast(title: string, description: string): void {
    toast(title, {
      description: description,
      action: {
        label: 'close',
        onClick: () => console.log('close'),
      },
    });
  }

}
