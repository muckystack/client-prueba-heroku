// Variable of global configutation
export var GLOBAL = {
    // url:    'https://my-app-chida.herokuapp.com/',
    url:    'http://localhost:5000/',
}


// Variable of message validations
export var _validations = [
    {
      validator: 'required',
      msg: 'Este campo es requerido'
    },
    {
      validator: 'minlength',
      msg: 'El campo tiene que tener minimo | carcteres'
    },
    {
      validator: 'maxlength',
      msg: 'El campo tiene que tener maximo | carcteres'
    },
    {
      validator: 'pattern',
      msg: 'El campo no cumple con el pattern'
    },
    {
      validator: 'email',
      msg: 'El campo tiene que ser un correo'
    },
  ];