import { Component, OnInit } from '@angular/core';
import { Router , RouterModule } from '@angular/router';

import { FormsModule , ReactiveFormsModule , FormGroup , FormBuilder } from '@angular/forms';


declare const $: any;

@Component({
  selector: 'app-rightcard',
  templateUrl: './rightcard.component.html',
  styleUrls: ['./rightcard.component.css']
})
export class RightcardComponent implements OnInit {

form: any;
_replyto: any;
message: string;


messageA = false;


  text: any;

constructor(private router: Router) { }



  ngOnInit() {
  }



sendForm() {

this.messageA = !this.messageA;

$('#myForm').submit( function (e) {

  const _replyto = document.getElementById('_replyto');
  const text = document.getElementById('text');

  if (!this._replyto || !this.text) {
    // console.log('error here');
  } else {
    // console.log('estou else');

   $.ajax({
   url: 'https://formspree.io/kelberstuchi@gmail.com',
   method: 'POST',
   data: $(this).serialize(),
   dataType: 'json'
});

  e.preventDefault();
  $(this).get(0).reset();
  // console.log('enviado com sucesso !');

   }
   this.text.value = '';
   this._replyto.value  = '';
});


  setTimeout( () => {
    this.router.navigate(['']);
  }, 3500);



}




}
