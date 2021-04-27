import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/service/data-getter.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  @Input() isNew: boolean;
  @Output() addCar = new EventEmitter();
  @Output() cancelAddingCar = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
    if(this.isNew){
      this.car = {
        carName: '',
        capitalization: '',
        country: ''
      };
      this.title = 'New car'
    }
  }

  addNew(){
    if(this.isNew){
      this.addCar.emit(this.car);
    }
  }

  cancelAdding(){
    if(this.isNew){
      this.cancelAddingCar.emit();
    }
  }

}
