import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from 'src/models/user.model';
import { _validations } from 'src/global/configurations';
import { ValidationsService } from 'src/app/services/validations/validations.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  
  // Variables
  public register:boolean = true;
  public myForm:FormGroup;

  public validate = _validations;

  // Models
  public user:User;

  constructor(public _validationsService:ValidationsService, private _fb:FormBuilder, private _authService:AuthService) {
    
    this.user = new User(null, '', '', '', '', '', null, null);

    this.myForm = _fb.group(this._validationsService.accessValidate);
    
  }

  ngOnInit() {
  }


  // Register user
  registerUser(form:NgForm) {

    this._authService.registerUser(this.user).subscribe(
      response => {
        console.log(response);
        form.reset();
        this._validationsService.alertSuccess(response);
      },
      error => {
        console.log(error);
        this._validationsService.alertError(error.error);
      }
    );

  }

}
