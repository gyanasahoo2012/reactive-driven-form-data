import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-validator',
  templateUrl: './form-validator.component.html',
  styleUrls: ['./form-validator.component.css']
})
export class FormValidatorComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup | any;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'secret': new FormControl("select", [Validators.required]),
      'gender': new FormControl("Male")
    });
  }

  onSuggestionName() {
    const username = 'superuser';
    // this.signupForm.form.patchValue({
    //   userName: username
    // });
  }

  onSubmit() {
    console.log("Submitted..");
    console.log(this.signupForm);
  }
}
