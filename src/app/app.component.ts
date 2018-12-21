import { Component, OnInit, ViewChild, AfterViewInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy, OnChanges } from '@angular/core';
import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';
import {interval} from 'rxjs';
import { ScootyComponent } from './scooty/scooty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent implements OnInit,AfterViewInit,OnChanges,DoCheck,AfterContentInit,
                                      AfterContentChecked,AfterViewChecked {

  @ViewChild(ScootyComponent) scootyComponent : ScootyComponent;

 
  title = 'sample-core-features';
  titleBike = "Bikes";
  titleScooty :string;

  likes = 0;
  dislikes = 0;


   seconds = interval(1000);
    value = 0;
    h = 0;
    m = 0;
    s = 0;
  
    ngOnChanges(){
      console.log("In OnChanges of app component");

    }

   ngOnInit(){
    
      this.seconds.subscribe( n => {
        this.h = Math.floor(n/3600);
        this.m = Math.floor(n%3600/60);
        this.s = Math.floor(n%3600%60);
      })
   }

   ngDoCheck(){
    console.log("In OnDoCheck of app component");
   }

   ngAfterContentInit(){
    console.log("In ngAfterContentInit of app component");

   }

   ngAfterContentChecked(){
    console.log("In ngAfterContentChecked of app component");

   }

   ngAfterViewInit(){
     this.titleScooty = this.scootyComponent.titleScooty;
     console.log("In ngAfterViewInit of app component");

       }

       ngAfterViewChecked(){
        console.log("In ngAfterViewChecked of app component");

       }


  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  onLike(){
    this.likes++;
  }
  onDislike(){
    this.dislikes++;
  }

}
