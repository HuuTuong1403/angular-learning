import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: { id: number; name: string; price: number; description: string; } | undefined;
  //Inject CartService bằng cách thêm vào constructor()
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.getAll('productId')];
    });
  }

  addToCart(product:any){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
