import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  
  // Variables
  public register:boolean = true;

  // Models
  public user:User;

  constructor(private _authService:AuthService) {
    
    this.user = new User(null, '', '', '', '', '', null, null);
    
  }

  ngOnInit() {
  }


  // Register user
  registerUser(form:NgForm) {

    this._authService.registerUser(this.user).subscribe(
      response => {
        console.log(response);
        form.reset();
      },
      error => {
        console.log(error);
      }
    )

  }

}
