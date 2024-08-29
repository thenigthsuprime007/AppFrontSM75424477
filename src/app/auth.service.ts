import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'https://tu-api-de-autenticacion.com/login'; // URL del endpoint de autenticación

  constructor(private http: HttpClient) { }

  login(studentCode: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { studentCode, password });
  }
}
