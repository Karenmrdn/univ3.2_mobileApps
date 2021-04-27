import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { MyComponent } from './my/my.component';
import { NewCarComponent } from './new-car/new-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { ModelsListComponent } from './models-list/models-list.component';

const routes: Routes = [
  {path:'cars', component: CarListComponent},
  {path:'models/:car', component: ModelsListComponent},
  {path: '', redirectTo:'cars', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent, MyComponent, CarComponent, NewCarComponent, 
    CarListComponent, ModelsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
