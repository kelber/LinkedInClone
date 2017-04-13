import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from 'ng2-translate';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private router: Router,
private translate: TranslateService) {


   translate.addLangs(['en', 'pt', 'es', 'pol']);
     translate.setDefaultLang('en');

       const browserLang = translate.getBrowserLang();
         translate.use(browserLang.match(/en|pt|es|pol/) ? browserLang : 'en');

     }
      changeLanguage(lang) {
          this.translate.use(lang);
          }

  ngOnInit() {
  $('.dropdown-button').dropdown();
  $('.button-collapse').sideNav({
    menuWidth: 200,
    edge: 'left', // Choose the horizontal origin
    draggable: true,  // Choose whether you can drag to open on touch screens,
    closeOnClick: true
    });



  $('.scrollspy').scrollSpy();


  $('.collapsible').collapsible();




 }

  }

