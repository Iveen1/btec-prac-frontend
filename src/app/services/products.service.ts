import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(type: string, page: number, size: number=10) {
    return this.http.get(`http://localhost:8080/api/products?type=${type}&page=${page}&size=${size}`, httpOptions)
  }

  getProductById(id: number) {
    return this.http.get(`http://localhost:8080/api/products/${id}`, httpOptions)
  }
}
