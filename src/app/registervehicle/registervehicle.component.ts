import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.component.html',
  styleUrls: ['./registervehicle.component.css']
})
export class RegistervehicleComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  cancelForm(){
      this.route.navigate([{outlets:{ registerOutlet : null }}]);
  }

}
