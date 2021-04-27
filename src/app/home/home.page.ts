import { SharedDataService } from './../services/shared-data.service';
import { Component } from '@angular/core';
import { DataGetterService, Car } from '../services/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Cars';
  cars: Car[];
  showNew = false;
  showEdit = -1;
  username: string;

  constructor(
    private dataGetter: DataGetterService,
    private sharedData: SharedDataService
  ) {
    this.dataGetter.getCars().subscribe((data) => {
      this.cars = data;
    });
    this.username = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(car) {
    this.dataGetter.deleteCar(car).subscribe((res) => {
      this.dataGetter.getCars().subscribe((data) => {
        this.cars = data;
      });
    });
  }

  addCar(car) {
    this.dataGetter.addCar(car).subscribe((res) => {
      this.dataGetter.getCars().subscribe((data) => {
       
        this.cars = data;
      });
    });
    this.showNew = false;
  }
}
