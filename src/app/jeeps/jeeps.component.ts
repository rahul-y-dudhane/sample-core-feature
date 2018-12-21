import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle-list.service';

@Component({
  selector: 'app-jeeps',
  templateUrl: './jeeps.component.html',
  styleUrls: ['./jeeps.component.css']
})
export class JeepsComponent implements OnInit {
  
  jeeps = [];

  constructor(private vehicleService : VehicleService) {
    console.log("Jeeps component");

           
      }

  ngOnInit() {
    this.vehicleService.vehicleBehaviorSubject.subscribe(data => {
      this.jeeps = data.filter(item =>{
        return item.type == "jeep";
      })
    });
  }

}
