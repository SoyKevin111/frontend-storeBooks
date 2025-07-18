import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Token } from '../../shared/models/token.model';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  API_URL = 'http://localhost:8080/storebooks/administrators';
  private http = inject(HttpClient);

  constructor() { }

  login(username: string, password: string): Observable<Token> {
    return this.http.get<Token>(this.API_URL + `/login?username=${username}&password=${password}`).pipe(
      tap(token => localStorage.setItem('authToken', JSON.stringify(token)))
    );
  }


  /*   login(username: string, password: string): Observable<Token> {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map(admins => {
          const admin = admins.find(a => a.username === username && a.password === password);
          if (!admin) {
            throw new Error('Invalid credentials');
          }
          const token: Token = {
            id: Number(admin.id),
            username: admin.username,
            expiresAt: new Date(Date.now() + 5 * 60 * 1000).toISOString().slice(0, 19)
          };
          localStorage.setItem('authToken', JSON.stringify(token));
          return token;
        })
      );
    } */

  logout(): void {
    localStorage.removeItem('authToken');
  }

  getToken(): Token | null {
    const tokenString = localStorage.getItem('authToken');
    if (!tokenString) return null;
    return JSON.parse(tokenString);
  }


  isSessionActive(): boolean {
    const tokenString = localStorage.getItem('authToken');
    if (!tokenString) return false;

    const token: Token = JSON.parse(tokenString);

    // 🧼 Recortar nanosegundos si están presentes
    const cleanedDate = token.expiresAt.split('.')[0];

    console.log(cleanedDate);


    return new Date(cleanedDate) > new Date();
  }





}
