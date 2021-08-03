import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  restaurantData: any;
  constructor(private resto: RestaurantsService) {}

  ngOnInit() {
    this.resto
      .getRestaurants()
      .subscribe(res => (this.restaurantData = res as any));
    //this.resto.getRestaurants();
  }
}
