import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  searchTerm:string = '';

  allProducts:any = []; // array of data holding all products

  constructor(private api:ApiService, private cart:CartService) { }

  ngOnInit(): void {
    this.api.getAllProduct().subscribe((data:any) => {
      this.allProducts = data.Product
    })
    this.api.searchKey.subscribe((data:any) => {
      this.searchTerm = data
    })
  }

  addToCart(product:any){
    this.cart.addToCart(product)
  }

}
