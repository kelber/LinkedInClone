import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor( private translate: TranslateService) {
   translate.addLangs(['en', 'pt', 'es', 'pol']);
     translate.setDefaultLang('en');

       const browserLang = translate.getBrowserLang();
         translate.use(browserLang.match(/en|pt|es|pol/) ? browserLang : 'en');
    }
          changeLanguage(lang) {
          this.translate.use(lang);
          }




}
