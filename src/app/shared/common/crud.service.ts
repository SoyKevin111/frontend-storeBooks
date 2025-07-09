import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export class CrudService<T extends { id?: number }> {
  protected http = inject(HttpClient);

  constructor(protected baseUrl: string) { }

  findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  create(item: T): Observable<T> {
    const itemWithId = {
      ...item,
      id: String(Math.floor(Math.random() * 1000000) + 1)
    };
    return this.http.post<T>(this.baseUrl, itemWithId);
  }

  update(item: T, id: number): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
