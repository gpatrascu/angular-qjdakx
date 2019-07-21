import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.items = this.cartService.items;

    this.checkoutForm = this.formBuilder.group({
      name: 'george',
      address: ''
    });
  }


   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
 
    this.cartService.clear();
    this.checkoutForm.reset();

    this.items = this.cartService.items;
  }
}