import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  regForm:FormGroup



  constructor(){
    this.regForm = new FormGroup({
      uname:new FormControl(null,[Validators.required,Validators.minLength(4)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      cpassword:new FormControl(null,[Validators.required]),
      gender:new FormControl(),
      subscribe:new FormControl(),

    })
  }
  show(){
    console.log(this.regForm)
  }
  
}

