import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  checkOutForm: any;

  constructor(
      private cartService: CartService,
      private formBuilder: FormBuilder,
  ) {
      this.checkOutForm = this.formBuilder.group({
        name: '',
        address: '',
      });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData:any) {
      this.items = this.cartService.clearCart();
      this.checkOutForm.reset();

      console.warn('Your order has been submitted', customerData);
  }
}
