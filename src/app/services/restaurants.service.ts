import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestaurantsService {
  restaurantData: any;

  constructor(private http: HttpClient) {}

  getRestaurants() {
    // return this.http
    //   .get<any>('../assets/resto.json')
    //   .subscribe(data => (this.restaurantData = data));
    return this.http.get('https://api.github.com/organizations?per_page=5');
  }
}
