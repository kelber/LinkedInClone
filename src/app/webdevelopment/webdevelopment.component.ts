import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-webdevelopment',
  templateUrl: './webdevelopment.component.html',
  styleUrls: ['./webdevelopment.component.css']
})
export class WebdevelopmentComponent implements OnInit {

constructor() {}

  ngOnInit() {


  // tem que usar os 2 para funcionar
  $('.collapsible').collapsible();
  $('.collapsible').collapsible('open', 0);


  $('.tapTarget').tapTarget('open');
  // $('.taptarget').tapTarget('close');

  setTimeout( () => {
  $('.determinate').addClass(
'animated slideInLeft');


  // fadeInLeftBig
  // slideInLeft
  // tada shake


  }, 7000);

  // close onInit
}

openDisco() {
   $('.tap-target').tapTarget('open');
  }




}



