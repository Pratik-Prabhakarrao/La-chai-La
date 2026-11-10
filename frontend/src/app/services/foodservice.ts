import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_food } from '../../data';

@Injectable({ providedIn: 'root' })
export class Foodservice {
  getAll(): Food[] {
    return sample_food;
  }
}
