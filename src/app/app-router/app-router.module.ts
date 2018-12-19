import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import { VehicleInfoComponent } from '../vehicle-info/vehicle-info.component';
import { RegistervehicleComponent } from '../registervehicle/registervehicle.component';


const route : Routes = [
  { 
    path:"vehicle/:id" , 
    component: VehicleInfoComponent, 
    outlet:'infoOutlet',
    data:{
      animation: 'vehicle'
    }
  },

  { 
    path:'register',
    component:RegistervehicleComponent,
    outlet:'registerOutlet'
  },

{ 
  path:'', 
  redirectTo:'',
  pathMatch:'full',
  data:{animation:'home'}
}

];

@NgModule({
  declarations:[VehicleInfoComponent],
  imports: [
    CommonModule, RouterModule.forRoot(route)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
export const components = [VehicleInfoComponent];
