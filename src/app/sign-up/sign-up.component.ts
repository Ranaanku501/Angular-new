import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  form : FormGroup;

  name = '';
  constructor(
    private formBuilder: FormBuilder,
  ) {

    this.form = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      Last_name: ['', Validators.compose([Validators.required])],
      Phone_Number: ['', Validators.compose([Validators.required])],
      Amount: ['', Validators.compose([Validators.required])],
    });
    console.log("heloo");
   }

  ngOnInit() {
  }

  signupFun() {
    if (this.form.valid) {
        console.log('form',this.form.value)
    } else {
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsTouched({onlySelf: true});
        });
    }
}


}
