import { Component, OnInit, OnChanges } from '@angular/core';
import { VehicleService } from '../services/vehicle-list.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-bike-component',
  templateUrl: './bike-component.component.html',
  styleUrls: ['./bike-component.component.css']
})
export class BikeComponentComponent implements OnInit {

  bikes = [];
  seconds = interval(1000);

 
  constructor( private vehicleService : VehicleService) { 
    
    console.log("Bike component");
    
   
   
  }

  ngOnInit() {
    this.seconds.subscribe(n => {
      if(this.vehicleService.isDataChanged()){

        this.vehicleService.getBikes().subscribe( data =>{
          this.bikes = data;
        })
      }
      });
    }
 

}
