import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-charan',
  templateUrl: './charan.component.html',
  styleUrls: ['./charan.component.css']
})
export class CharanComponent {


  title = 'loginform'; // Title property
  loginForm!: FormGroup // LoginForm FormGroup
  uname: any; // Uname property



  constructor() { }
  c: any
  ngOnInit(): void {  // ngOnInit lifecycle hook
    //login vaildation
    this.loginForm = new FormGroup({       // Creating a new instance of FormGroup
      uname: new FormControl("", [Validators.required, Validators.minLength(6)]), // Adding uname form control with required and minLength(6) validators
      email: new FormControl("", [Validators.required, Validators.minLength(8)]), // Adding email form control with required and minLength(8) validators
      password: new FormControl("", [Validators.required, Validators.minLength(8)]), // Adding password form control with required and minLength(8) validators

    });



  }
  //login button 
  registerSubmited() {       // Register submitted method
    console.log(this.loginForm.value);      // Logging the form value to the console

  }

}
