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
  carNm: string;
  models: any[];
  textData: string;

  constructor(
    private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService
  ) {}

  ngOnInit() {
    this.carNm = this.route.snapshot.paramMap.get('carNm');
    this.dataGetter.getModels(this.carNm).subscribe((data) => {
      this.models = data;
    });
  }

  passData() {
    
    this.sharedData.setTextData(this.textData);
  }
}
