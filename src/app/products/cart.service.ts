import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItmesListArray:any = []
  cartItemsList = new BehaviorSubject([])

  constructor() { }

  // Add to cart
  addToCart(product:any){
    this.cartItmesListArray.push(product)
    this.cartItemsList.next(this.cartItmesListArray)
    console.log(this.cartItmesListArray);
    this.getTotal()
  }

  // total price
  getTotal(){
    let totalSum = 0
    this.cartItmesListArray.map((item:any) => {
      totalSum += item.price
    })
    return totalSum
  }


  // Remove a single item
  removeCartItem(product:any){
    this.cartItmesListArray.map((item:any,index:any) => {
      if(product.id === item.id){
        this.cartItmesListArray.splice(index,1)
      }
    })
    this.cartItemsList.next(this.cartItmesListArray)
  }

  // Remove all item
  removeAllItems(){
    this.cartItmesListArray = []
    this.cartItemsList.next(this.cartItmesListArray)
  }

}
