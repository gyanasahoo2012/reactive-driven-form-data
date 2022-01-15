import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup | any;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userName': new FormControl(null),
      'email': new FormControl(null),
      'secret': new FormControl("select"),
      'gender': new FormControl("Male")
    });
  }
  onSuggestionName(){
    const username = 'superuser';
  }

  onSubmit() {
    console.log("Submitted..");
    console.log(this.signupForm);
  }
}
