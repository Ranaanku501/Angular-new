import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : FormGroup;

  name = '';
  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.form = this.formBuilder.group({
      email_or_phone: ['', Validators.compose([Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: ['', Validators.required]
  });
  }


  ngOnInit() {

this.form.patchValue({
  email_or_phone:'45645465',
  password:'46546554645'
})
  
  }

  loginFun() {
    if (this.form.valid) {
        console.log('form',this.form.value)
    } else {
        Object.keys(this.form.controls).forEach(key => {
            this.form.controls[key].markAsTouched({onlySelf: true});
        });
    }
}

}
