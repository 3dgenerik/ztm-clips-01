import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ])

  email = new FormControl('',[
    Validators.required,
    Validators.email
  ])

  age = new FormControl('',[
    Validators.required,
    Validators.min(18)
  ])

  password = new FormControl('',[
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
  ])
  
  confirm_password = new FormControl('', [
    Validators.required
  ])

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';


  registerForm:FormGroup = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirm_password: this.confirm_password
  });

  register(){
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being created.'
    this.alertColor = 'green';
  }


}
