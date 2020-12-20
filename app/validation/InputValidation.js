import ValidationComponent from './ValidationComponent';
import defaultMessages from './defaultMessages';
import defaultRules from './defaultRules';

export const InputValidation = (
  email,
  phoneNumber,
  password,
  confirmPassword,
) => {
  ValidationComponent.prototype.deviceLocale = 'en';
  ValidationComponent.prototype.rules = defaultRules;
  ValidationComponent.prototype.messages = defaultMessages;

  ValidationComponent.prototype.state = {
    Email: email,
    Phonenumber: phoneNumber,
    Password: password,
    Confirmpassword: confirmPassword,
  };

  ValidationComponent.prototype.validate({
    Email: { required: true, email: true },
    Phonenumber: { required: true },
    Password: { required: true, minlength: 9 },
    Confirmpassword: { required: true },
  });
  return ValidationComponent.prototype.errors;
};

export const LoginInputValidation = (
  username,
  password

) => {
  ValidationComponent.prototype.deviceLocale = 'en';
  ValidationComponent.prototype.rules = defaultRules;
  ValidationComponent.prototype.messages = defaultMessages;

  ValidationComponent.prototype.state = {
    Username: username,
    Password: password,

  };

  ValidationComponent.prototype.validate({
    Username: { required: true },
    Password: { required: true },

  });
  return ValidationComponent.prototype.errors;
};