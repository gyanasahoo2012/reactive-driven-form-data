import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { FormValidatorComponent } from './form-validator/form-validator.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormCustomValidatorComponent } from './form-custom-validator/form-custom-validator.component';
import { FormCustomValidatorErrorcodesComponent } from './form-custom-validator-errorcodes/form-custom-validator-errorcodes.component';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    FormValidatorComponent,
    FormGroupComponent,
    FormCustomValidatorComponent,
    FormCustomValidatorErrorcodesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
