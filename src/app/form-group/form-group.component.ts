import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup | any;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'secret': new FormControl("select", [Validators.required]),
      'gender': new FormControl("Male"),
      'hobbies': new FormArray([])
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

  onAddHobbies() {
    const hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobbyControl);
  }
}
