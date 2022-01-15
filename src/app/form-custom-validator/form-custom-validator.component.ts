import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-custom-validator',
  templateUrl: './form-custom-validator.component.html',
  styleUrls: ['./form-custom-validator.component.css']
})
export class FormCustomValidatorComponent implements OnInit {

  genders = ['Male', 'Female'];
  signupForm: FormGroup | any;
  forbiddenUserNames = ['Ram', 'Sham'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'userName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    //return null;
    return {};
  }
}
