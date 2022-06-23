import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CreateOrderInfo} from "../info/CreateOrderInfo";

const httpOptions = {observe: 'response', headers: new HttpHeaders({'Content-Type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  createOrder(data: CreateOrderInfo) {
    // @ts-ignore
    return this.http.post(`http://localhost:8080/api/orders/create`, data, httpOptions)
  }
}
