import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';

const aR: Routes = [
  { path: '', component: IntroComponent },
  { path: 'home', component: HomeComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot( aR ) ],
  exports: [ RouterModule ]

})

export class AppRoutingModule {}

