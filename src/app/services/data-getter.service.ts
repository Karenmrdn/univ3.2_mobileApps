import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Car {
  carName: string;
  capitalization: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataGetterService {
  private cars: Car[] = [
    {
      carName: 'Toyota',
      country: 'Japan',
      capitalization: '77',
    },
    {
      carName: 'BMW',
      country: 'Germany',
      capitalization: '103',
    },
    {
      carName: 'Ferrari',
      country: 'Italy',
      capitalization: '213.5',
    },
  ];

  private username = '';
  private users = ['Karen', 'Ihor'];

  private models = [
    {
      name: 'RAV4',
      car: 'Toyota',
      engineValue: '2.5'
    },
    {
      name: 'C-HR',
      car: 'Toyota',
      engineValue: '2.0',
    },
    {
      name: 'X4',
      car: 'BMW',
      engineValue: '3.0',
    },
    {
      name: 'X6',
      car: 'BMW',
      engineValue: '4.4'
    },
    {
      name: 'Aperta',
      car: 'Ferrari',
      engineValue: '6.2',
    },
    {
      name: 'Portofino',
      car: 'Ferrari',
      engineValue: '3.9',
    },
  ];

  getModels(carName: string): Observable<any[]> {
    return of(
      this.models.filter((item) => {
        return item.car === carName;
      })
    );
  }

  getUser() {
    return this.username;
  }

  setUser(name: string) {
    this.username = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  constructor() { }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }

  addCar(car: Car) {
    this.cars.push(car);
  }

  deleteCar(index) {
    this.cars.splice(index, 1);
  }
}
