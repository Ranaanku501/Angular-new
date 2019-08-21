import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup;
  submitted = false;
  constructor() { }

  ngOnInit() {
    this.login = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      Password : new FormControl('',Validators.required),
    });
  }

  onLogin(){
    this.submitted = true;
    console.log(this.login.value);
  }

  // convenience getter for easy access to form fields
get f() { return this.login.controls; }

}
