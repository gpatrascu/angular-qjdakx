import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items = []
  constructor(private http:HttpClient) { }

  add(product) {
    this.items.push(product);
    window.alert('Your product has been added to the cart!');
  }

  clear() {
    this.items = []
  }

   getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}