import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RegisterRequestInterface } from '../types/register-request';
import { Observable, map } from 'rxjs';
import { CurrentUserInterface } from '../../shared/types/current-user';
import { AuthResponseInterface } from '../types/auth-response.interface';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  register(data:RegisterRequestInterface): Observable<CurrentUserInterface>{
    const url = environment.apiURL + '/users'
    return this.http.post<AuthResponseInterface>(url, data).pipe(map(response=>response.user))
  }
}
