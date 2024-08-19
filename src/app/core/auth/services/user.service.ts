import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../../../shared/models/user.interface';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { toast } from 'ngx-sonner';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  dateOptions: any = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
};

  constructor(private http: HttpClient) { }
  create(user: UserI): Observable<UserI> {
    
    return this.http.post<UserI>('nest/users/register', user).pipe(
      tap((createdUser: UserI) =>   
        toast('User '+createdUser.username+' created successfully', {
        description: new Date().toLocaleDateString('en-US', this.dateOptions),
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