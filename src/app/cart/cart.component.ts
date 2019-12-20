import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

export interface IBikes {
  id: number;
  image: string;
  description: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  bikes: Array<IBikes> = [];


  constructor(
    private http: Http,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) { }

  async ngOnInit() {
    const bikes = await this.loadFileFromJson;
    if (this.bikes && this.bikes.length > 0) {
    } else {
      this.bikes = await this.loadFileFromJson();
    }
  }
  addBikeOne() {
    const bikes: IBikes = {
      id: 1,
      image: '../../assets/bike1.jpeg',
      description: 'Bike Model 1',
      price: 5000,
      quantity: 1
    };
    this.bikes.push(bikes)
    this.saveToLocalStorage();
  }
  addBikeTwo() {
    const bikes: IBikes = {
      id: 2,
      image: '../../assets/bike2.jpeg',
      description: 'Bike Model 2',
      price: 4000,
      quantity: 2
    };
    this.bikes.push(bikes)
    this.saveToLocalStorage();

  }
  addBikeThree() {
    const bikes: IBikes = {
      id: 3,
      image: '../../assets/bike3.jpeg',
      description: 'Bike Model 3',
      price: 3000,
      quantity: 3
    };
    this.bikes.push(bikes)
    this.saveToLocalStorage();

  }

  async loadFileFromJson() {
    const inventory = await this.http.get('assets/inventory.json').toPromise();
    return inventory.json();
  }
  delete(index: number) {
    this.bikes.splice(index, 1);
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem('bikes', JSON.stringify(this.bikes));
    this.loadFileFromJson();
  }
  checkout() {
    this.router.navigate(['invoice']);
  }
}
