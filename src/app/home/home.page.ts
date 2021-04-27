import { Component } from '@angular/core';
import { DataGetterService, Car } from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cars: Car[];
  showNew = false;
  showEdit = -1;
  username: string;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getCars().subscribe((data) => {
      this.cars = data;
    });
    this.username = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  edit(car: Car) {}

  delete(index: number) {
    this.dataGetter.deleteCar(index);
  }

  addCar(car) {
    this.dataGetter.addCar(car);
    this.showNew = false;
  }
}
