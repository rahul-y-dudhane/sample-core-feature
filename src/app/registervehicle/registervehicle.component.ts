import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {FormControl, FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms'
import { VehicleService } from '../services/vehicle-list.service';


@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.component.html',
  styleUrls: ['./registervehicle.component.css']
})
export class RegistervehicleComponent implements OnInit {

  vehicleForm = new FormGroup({
    name : new FormControl('', Validators.required),
    type : new FormControl('', Validators.required),
    desc : new FormControl('', Validators.required)

  });



  constructor(private route : Router, private vehicleService : VehicleService) { }

  ngOnInit() {
  }
  
  cancelForm(){
      this.route.navigate([{outlets:{ registerOutlet : null }}]);
  }

  registerVehicle(){
    console.log();
    this.vehicleService.registerVehicle(this.vehicleForm.get('name').value,
    this.vehicleForm.get('type').value,
    this.vehicleForm.get('desc').value);

  }
  
  

  }

