import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle-list.service';

import {ActivatedRoute , Params, Router} from '@angular/router'

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  vehicleInfo =[] ;
  selectedVehicle : number;

  constructor(private vehicleService : VehicleService , private route : ActivatedRoute, private router : Router ) {

  }

  ngOnInit() { 
    this.route.params.subscribe(( parms :Params) =>{ 
      
      this.vehicleInfo = this.vehicleService.getVehicleInfo( +parms["id"])});
  
  

}

  cancel(){
  this.router.navigate([{ outlets: { infoOutlet: null } }]);
  }
}
