import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BestSellers, BestSellersByCategory, LowRotationBooks, MonthlySales } from '../../shared/models/reports.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  API_URL: string = 'http://localhost:8080/storebooks/reports'
  private http = inject(HttpClient)

  constructor() { }

  getMontlySales(): Observable<MonthlySales[]> {
    return this.http.get<MonthlySales[]>(this.API_URL + "/monthly-sales");
  }

  getLowRotationBooks(): Observable<LowRotationBooks[]> {
    return this.http.get<LowRotationBooks[]>(this.API_URL + "/low-rotation-books");
  }

  getBestSellersByCategory(): Observable<BestSellersByCategory[]> {
    return this.http.get<BestSellersByCategory[]>(this.API_URL + "/best-sellers-by-category");
  }

  getBestSellers(): Observable<BestSellers[]> {
    return this.http.get<BestSellers[]>(this.API_URL + "/best-sellers");
  }

}
