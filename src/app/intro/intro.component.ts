import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {


  constructor(private router: Router) { }
  ngOnInit() {

  setTimeout( () => {
    this.router.navigate(['/home']);
  }, 3500);


  }

}
