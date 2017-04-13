import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   $('.tap-target').tapTarget('close');



  }


  openDisco() {
   $('.tap-target').tapTarget('open');
  }


    // openGit2() {
    // $("a.git").on("click",function(){
    // window.open('https://www.github.com/in/kelber','popUpWindow');})
    // }
  // openGit() {
  // window.open('https://github.com/in/kelber', '_blank');
  // }



}
