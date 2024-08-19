import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../../../shared/models/user.interface';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { toast } from 'ngx-sonner';

export const   dateOptions: any = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  findByUsername(username: string): Observable<UserI[]> {
    return this.http.get<UserI[]>('http://localhost:3000/nest/users/find-by-username?username=' + username);
  }
  create(user: UserI): Observable<UserI> {
    // 'nest/users/register'
    return this.http.post<UserI>('http://localhost:3000/nest/users/register', user).pipe(
      tap((createdUser: UserI) =>   
        toast('User '+createdUser.username+' created successfully', {
        description: new Date().toLocaleDateString('en-US', dateOptions),
        action: {

          label: 'close',
          onClick: () => console.log('close'),
        }
      })
    ),
      catchError(e=>{
        toast('Error', {
          description:  " " + e.status + " " + e.statusText,
          action: {
            label: 'close',
            onClick: () => console.log('close'),
          }
        })
        return throwError(e);
      })
    )
  }


}