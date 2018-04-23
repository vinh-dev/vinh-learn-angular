import { Component, OnInit } from '@angular/core';
import { Vinhdaica } from "../vinhdaica";
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Vinhdaica(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

newHero() {
this.model = new Vinhdaica(42, '', '');
}
}
