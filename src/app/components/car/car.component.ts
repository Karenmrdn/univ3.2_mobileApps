import { DataGetterService } from '../../services/data-getter.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from 'src/app/services/data-getter.service';

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

  constructor(private dataGetter: DataGetterService) {}

  ngOnInit() {
    if (this.isNew) {
      this.car = {
        id: null,
        carName: '',
        country: '',
        capitalization: ''
      };
      this.title = 'New car';
    }
  }

  addNew() {
    if (this.isNew) {
      this.addCar.emit(this.car);
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingCar.emit();
    }
  }

  saveCar() {
    this.dataGetter.editCar(this.car).subscribe((data) => console.log(data));
  }
}
