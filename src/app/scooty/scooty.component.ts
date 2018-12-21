import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle-list.service';

@Component({
  selector: 'app-scooty',
  templateUrl: './scooty.component.html',
  styleUrls: ['./scooty.component.css']
})
export class ScootyComponent implements OnInit {

  scooties = [];

  constructor(private vehicleService : VehicleService) {
    console.log("Scooty component");



   }

  ngOnInit() {
    this.vehicleService.vehicleSubject.subscribe(data => {
      this.scooties = data.filter(item =>{
        return item.type == "scooty";
      })
    });
  }

}
