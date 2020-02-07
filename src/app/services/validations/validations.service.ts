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
import { _validations } from 'src/global/configurations';

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
    password:   ['', [Validators.required, Validators.minLength(6)]],
  };

  // Validate login
  public accessValidate = {
    email:      ['', [Validators.required, Validators.email]],
    password:   ['', [Validators.required, Validators.minLength(6)]],
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
  
  
  getMessages(nameSelector, formValidator):String {
    let resp:String = '';

    for (let i = 0; i < _validations.length; i++) {
      if(formValidator.get(nameSelector).errors && formValidator.get(nameSelector).dirty) {
        if(formValidator.get(nameSelector).hasError(_validations[i].validator)) {

          let aux:string =_validations[i].msg;
          if(formValidator.get(nameSelector).errors.minlength != undefined)  {
            aux = this.lenghtValidations(_validations[i], formValidator.get(nameSelector).errors) + '';
          }
          resp += aux;

        }
      }
    }
    
    return resp;
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
