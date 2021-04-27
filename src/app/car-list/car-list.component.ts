import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../services/car-data.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: any[] = [];

  constructor(private carService: CarDataService){
    carService.getCars().subscribe(
      (cars) => this.cars = cars
    );
  }

  ngOnInit(): void {
  }

}
