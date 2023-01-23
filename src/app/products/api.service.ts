import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchKey = new BehaviorSubject('')

  constructor(private http:HttpClient) {}
  getAllProduct(){
    return this.http.get('http://localhost:3000/all-products')  //products json data
  }
}
