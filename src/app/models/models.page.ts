import { SharedDataService } from '../services/shared-data.service';
import { DataGetterService } from '../services/data-getter.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-models',
  templateUrl: './models.page.html',
  styleUrls: ['./models.page.scss'],
})
export class ModelsPage implements OnInit {
  car_id: number;
  carNm: string;
  models: any[];
  textData: string;

  constructor(
    private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) {
    this.car_id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.carNm = this.route.snapshot.paramMap.get('carNm');
    this.dataGetter.getModels(this.car_id).subscribe((data) => {
      this.models = data;
    });
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }
}
