import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';

export class CrudService<T extends { id?: number }> {
  protected http = inject(HttpClient);

  constructor(protected baseUrl: string) { }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl).pipe(
      tap(data => console.log(data))
    );
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item);
  }

  update(item: T, id: number): Observable<T> {
    console.log(id);
    
    return this.http.put<T>(`${this.baseUrl}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
