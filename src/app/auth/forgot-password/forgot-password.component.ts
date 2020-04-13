import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm = new FormGroup({
    email: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    //TODO Post
    console.log(this.forgotPassForm.value);
    this.forgotPassForm.reset();
  }

}
