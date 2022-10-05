import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  addExpense(data: any) {
    return this.http.post<any>(environment.baseUrl+'expenses', data);
  }

  getExpenses() {
    return this.http.get<any>(environment.baseUrl+'expenses');
  }

  deleteExpens(id: any) {
    return this.http.delete(environment.baseUrl+'expenses/' + id);
  }

  editExpens(data: any) {
    return this.http.put(environment.baseUrl+'expenses/' + data.id, data);
  }
}
