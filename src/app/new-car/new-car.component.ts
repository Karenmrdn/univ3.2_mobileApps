import { CarDataService } from '../services/car-data.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.scss']
})
export class NewCarComponent implements OnInit {
  @Output() car = new EventEmitter();
  showForm = false;

  constructor(private carService: CarDataService) { }

  ngOnInit(): void {
  }

  onSubmit(myForm){
    const FIELDS = myForm.form.controls;
    this.showForm = false;
    this.carService.addCar({
      carName: FIELDS.carName.value,
      country: FIELDS.country.value,
      capitalization: FIELDS.capitalization.value
    });
  }
}
