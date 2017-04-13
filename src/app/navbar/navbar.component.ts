import { Component, OnInit } from '@angular/core';

import { TranslateService } from 'ng2-translate';

declare const $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
constructor(
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

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
      );


  }

  menuIcon() {
    $('#nav-icon1').toggleClass('open');
    }







}
