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

  addProduct(data: any) {
    return this.http.post<any>(environment.baseUrl+'products', data);
  }
}
