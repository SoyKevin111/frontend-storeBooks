import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Token } from '../../shared/models/token.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:3000/administrators';
  private http = inject(HttpClient);

  constructor() { }

  login(username: string, password: string): Observable<Token> {
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
  }

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
    return new Date(token.expiresAt) > new Date();
  }





}
