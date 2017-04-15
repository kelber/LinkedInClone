import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule  , Http } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { TranslateModule , TranslateLoader , TranslateStaticLoader , TranslateService } from 'ng2-translate';
import { MyMissingTranslationHandler } from './missingtemplate.component';



// firebase
  import { AngularFireModule } from 'angularfire2';
  import { firebaseConfig } from '../environments/firebaseconfig';
  declare var firebase: any;

import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { LeftcardComponent } from './leftcard/leftcard.component';
import { RightcardComponent } from './rightcard/rightcard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';


// translation module
  export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
     }


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    WebdevelopmentComponent,
    LeftcardComponent,
    RightcardComponent,
    NavbarComponent,
    MessageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterializeModule,
    TranslateModule.forRoot({
    provide: TranslateLoader,
    useFactory: (createTranslateLoader) ,
    // or useFactory: (http: Http) => new TranslateStaticLoader(http, '../src/assets/i18n', '.json'),
    deps: [Http]
    }),
    AngularFireModule.initializeApp( firebaseConfig )

  ],
  providers: [ TranslateService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
