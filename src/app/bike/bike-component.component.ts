import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle-list.service';

@Component({
  selector: 'app-bike-component',
  templateUrl: './bike-component.component.html',
  styleUrls: ['./bike-component.component.css']
})
export class BikeComponentComponent implements OnInit {

  bikes = [];
 
  constructor( private vehicleService : VehicleService) { 
    
    console.log("Bike component");

    this.bikes = vehicleService.getBikes();
  }

  ngOnInit() {
  }

}
