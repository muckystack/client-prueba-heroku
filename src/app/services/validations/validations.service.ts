/**
 * Validations.service
 *
 * Author: Miguel Ángel Martínez Puga
 * Date: 04/02/2020
 * Version: 1.0
 */

import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  // VARIABLE

  // Validate register
  public registerValidate = {
    name:       ['', [Validators.required]],
    surname:    ['', [Validators.required]],
    nick:       ['', [Validators.required]],
    email:      ['', [Validators.required, Validators.email]],
    password:   ['', [Validators.required, Validators.minLength(8)]],
  };

  // Validate login
  public accessValidate = {
    email:      ['', [Validators.required, Validators.email]],
    password:   ['', [Validators.required, Validators.minLength(8)]],
  };





  constructor() {}

  
  
  
  

  /* ---------------------------------FUNCTIONS OF LIBRAY---------------------------------- */  
  
  /**
   * Function for format the lenght of character
   * @param error // Get variable of validations for type of error
   * @param form // Get error message
   */
  lenghtValidations(error, form):String {
    return (form.minlength) ? error.msg.split('|')[0] + form.minlength.requiredLength + error.msg.split('|')[1] : error.msg;
  }
  
  
  
  
  
  
  
  
  
  /* ----------------------------------FUNCTION FOR ALERTS---------------------------------- */  

  /**
   * Function for show a error alert
   * @param error Get the object error
   */
  alertError(error) {
    Swal.fire({
      icon: error.error.icon,
      title: error.error.title,
      text: error.message,
      footer: error.footer
    });
  }

  /**Function for show a success alert
   * 
   * @param response Get the objet success
   */
  alertSuccess(response) {
    Swal.fire({
      icon: 'success',
      title: response.title,
      text: response.message,
      footer: response.footer
    });
  }
  
}
