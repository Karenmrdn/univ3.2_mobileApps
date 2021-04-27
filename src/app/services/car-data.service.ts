import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  private cars = [
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

  private models = [
    {name: 'Rav4', carName: 'Toyota'},
    {name: 'C-HR', carName: 'Toyota'},
    {name: 'Camry', carName: 'Toyota'},
    {name: 'X5', carName: 'BMW'},
    {name: 'X7', carName: 'BMW'},
    {name: '812 GTS', carName: 'Ferrari'}
  ]
  constructor() { }

  getCars(): Observable<any[]>{
    return of(this.cars);
  }

  addCar(car){
    this.cars.push(car);
  }

  deleteCar(index){
    this.cars.splice(index, 1);
  }

  getModels(carName: string): Observable<any[]>{
    return of(this.models.filter(el => {
      return el.carName === carName;
    }));
  }
  
}
