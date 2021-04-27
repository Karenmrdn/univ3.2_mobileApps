import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Car {
  id: number;
  carName: string;
  capitalization: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataGetterService {
  baseUrl = 'http://localhost/api/';
  private cars: [];
  private users = [];
  private models = [];

  constructor(private http: HttpClient) {}

  private username = '';
  private token = '';

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  getUser() {
    return this.username;
  }

  setUser(name: string) {
    this.username = name;
  }

  setToken(token: string) {
    this.token = token;
  }

  getCars() {
    return this.http.get<any>(
      this.baseUrl + '?action=get-cars&token=' + this.token
    );
  }

  editCar(car) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-car&token=' + this.token,
      car
    );
  }

  addCar(car) {
    return this.http.post<any>(
      this.baseUrl + '?action=add-car&token=' + this.token,
      car
    );
  }

  deleteCar(car) {
    return this.http.post<any>(
      this.baseUrl + '?action=delete-car&token=' + this.token,
      car
    );
  }

  getModels(id: number) {
    return this.http.get<any>(
      this.baseUrl + `?action=get-models&car_id=${id}&token=${this.token}`
    );
  }
}
