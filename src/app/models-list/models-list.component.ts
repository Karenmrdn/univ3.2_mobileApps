import { CarListComponent } from '../car-list/car-list.component';
import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.scss']
})
export class ModelsListComponent implements OnInit {
  models: any[] = [];

  constructor(private carService: CarDataService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      params => this.getModels(params.car)
    )
  }

  getModels(carName: string){
    
    this.carService.getModels(carName).subscribe(
      (models) => {
        this.models = models;
      }
    );
  }

}
