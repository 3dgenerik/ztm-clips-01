import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm:FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    age:new FormControl('',[
      Validators.required,
    ]),
    password:new FormControl('',[
      Validators.required
    ]),
    confirm_password:new FormControl('', [
      Validators.required
    ])
  });


}
