import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../services/restaurants.service';
import { restos } from '../assets/resto';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  restaurantData: any;
  constructor(private resto: RestaurantsService) {}

  ngOnInit() {
    this.restaurantData = restos[0].restaurants;
  }
}
