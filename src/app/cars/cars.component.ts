import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle-list.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars = [];

  constructor(private vehicleService : VehicleService) {
    console.log("Cars component");
      
    
  }
  
  ngOnInit() {
    this.vehicleService.vehicleBehaviorSubject.subscribe(data => {
      this.cars = data.filter(item =>{
        return item.type == "car";
      })
    });
  }

}
