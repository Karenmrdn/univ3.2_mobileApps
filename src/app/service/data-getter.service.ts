import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Car {
  carName: string;
  capitalization: string;
  country: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private cars: Car[] = [
    {
      carName: 'Toyota',
      country: 'Japan',
      capitalization: '77'
    },
    {
      carName: 'BMW',
      country: 'Germany',
      capitalization: '103'
    },
    {
      carName: 'Ferrari',
      country: 'Italy',
      capitalization: '213.5'
    }
  ]

  constructor() { }

  getCars(): Observable<Car[]>{
    return of(this.cars);
  }

  addCar(car: Car){
    this.cars.push(car);
  }

  deleteCar(index){
    this.cars.splice(index, 1);
  }
}
