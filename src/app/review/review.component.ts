import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input() likes : number;

  @Input() dislikes : number;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log("In OnChanges of review component");

  }

}
