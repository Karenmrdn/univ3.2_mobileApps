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

  ionViewDidEnter() {
    if (this.sharedData.getTextData().length != 0) {
      this.title = this.sharedData.getTextData();
    }
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
