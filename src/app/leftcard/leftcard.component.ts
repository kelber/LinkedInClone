import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-leftcard',
  templateUrl: './leftcard.component.html',
  styleUrls: ['./leftcard.component.css']
})
export class LeftcardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  $('.scrollspy').scrollSpy();
  }

}
