import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: any[] = []; //Tạo mảng để lưu sản phẩm

  //Thêm sản phẩm
  addToCart(product: any){
    this.items.push(product);
  }

  //Trả danh sách sản phẩm đã thêm
  getItems(){
    return this.items;
  }

  //Xóa tất cả sản phẩm
  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient,
  ) { }

}
