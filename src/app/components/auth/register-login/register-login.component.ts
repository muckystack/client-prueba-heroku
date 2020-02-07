/**
 * Register and login
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 04/02/2020
 * Version: 1.0
 */

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { User } from 'src/models/user.model';
import { _validations } from 'src/global/configurations';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  
  /* VARIABLE */
   // Controler the form
  public register:boolean = false;
  // Ruls of validation
  public validate = _validations;
  


  /* MODEL */
  // 
  public user:User;
  // Model of validations
  public validateRegisterForm:FormGroup;
  public validateAccessForm:FormGroup;





  /**
   * Constructor
   * @param _router Library for navigate for routs of the site
   * @param _validationsService Service of ruls for validate form 
   * @param _fb Library for create form of ruls for validation columns of form
   * @param _authService Service of petition for access platform
   */
  constructor(private _router:Router, public _validationsService:ValidationsService, private _fb:FormBuilder, private _authService:AuthService) {
    
    // Create model of user
    this.user = new User(null, '', '', '', '', '', null, null);

    // Import the ruls of form for register user
    this.validateRegisterForm = this._fb.group(this._validationsService.registerValidate);
    this.validateAccessForm = this._fb.group(this._validationsService.accessValidate);
    
  }

  // NgInit
  ngOnInit() {
  }





  /* -----------------------------------FUNCTIONS---------------------------------- */

  /**
   * Function register one user
   * @param form Form from html
   */
  registerUser(form:NgForm) {
    this._authService.registerUser(this.user).subscribe(
      response => {
        form.reset();
        this._validationsService.alertSuccess(response);
      },
      error => {
        this._validationsService.alertError(error.error);
      }
    );
  }


  /**
   * Function access user
   * @param form Form from html
   */
  accessUser(form:NgForm) {
    this._authService.loginUser(this.user).subscribe(
      response => {
        console.log(response);
        (response.access) ? this._router.navigate(['home']) : '';
      },
      error => {
        this._validationsService.alertError(error.error);
      }
    )
  }

}
