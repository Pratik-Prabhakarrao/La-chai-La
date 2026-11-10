import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Food } from '../../shared/models/Food';
import { Foodservice } from '../../services/foodservice';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  food: Food[] = [];

  private foodService = inject(Foodservice);

  constructor() {
    this.food = this.foodService.getAll();
  }
}
