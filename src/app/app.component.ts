import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent implements OnInit {
  title = 'sample-core-features';

   seconds = interval(1000);
    value = 0;
    h = 0;
    m = 0;
    s = 0;

   ngOnInit(){
    
      this.seconds.subscribe( n => {
        this.h = Math.floor(n/3600);
        this.m = Math.floor(n%3600/60);
        this.s = Math.floor(n%3600%60);
      })
   }


  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }


}
