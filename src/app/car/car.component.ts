import { CarDataService } from '../services/car-data.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car;
  @Input() carIndex;
  showInfo = false;

  constructor(private carService: CarDataService) { }

  ngOnInit(): void {
    
  }

  deleteCar(){
    this.carService.deleteCar(this.carIndex);
  }
}
