import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getRestaurants() {
    //return this.http.get('/assets/resto.json');
    return this.http.get<any>('/assets/resto.json');
    //return this.http.get('https://api.github.com/organizations?per_page=5');
  }
}
