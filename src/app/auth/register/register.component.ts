import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { MustMatch } from '../../_helpers/must-match.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; 
  submitted = false;

  constructor(private location: Location, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required ],
        lastName: ['', Validators.required ],
        email: ['', [Validators.required, Validators.email] ],
        email2: ['', [Validators.required, Validators.email] ],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required ]
      },
      {
        validator: [MustMatch('password', 'confirmPassword'), MustMatch('email', 'email2')]
      }
    );
  }

  // convenience getter for easy access to form fields
  get formData(){
    return this.registerForm.controls;
  }


  register(){
    //TODO Post
    this.submitted = true;

     // stop here if form is invalid
     if (this.registerForm.invalid) {
        return;
    }
    else{
      console.log(this.registerForm.value);
      this.registerForm.reset();
      this.router.navigate(['/login']);
    }
    
  }

  goBack(): void{
    this.location.back();
  }

}
