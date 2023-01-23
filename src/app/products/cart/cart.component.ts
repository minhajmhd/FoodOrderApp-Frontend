import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  totalAmt:number = 0
  cartItems:any = []
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.cartItemsList.subscribe((data) => {
      console.log(data);
      this.cartItems = data
    })

    this.totalAmt = this.cart.getTotal()
  }

  removeItem(product:any){
    this.cart.removeCartItem(product)
    this.totalAmt = this.cart.getTotal()
  }

  removeAllItems(){
    this.cart.removeAllItems()
  }

}
