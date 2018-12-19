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

            this.jeeps = vehicleService.getJeeps();
      }

  ngOnInit() {
  }

}
