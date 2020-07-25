import React, { Component } from 'react';
import validator from 'validator';

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * The methods return error message if validation failed and false otherwise
 * You can use all supported validators and sanitizers of 'validator.js' libaray
 * See their docs here https://github.com/validatorjs/validator.js
 */

class ValidateFields {
  /*
   * A method that takes in the email
   * Validates it
   * Returns the response either error or false if there is no error
   */
  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Email is required';
    } else if (!validator.isEmail(email)) {
      return 'Invalid Email';
    }
    return false;
  }

  validateName(name) {
    if (validator.isEmpty(name)) {
      return 'Name is required';
    } else if (!validator.isLength(name, { min: 2 })) {
      return 'Name should be minimum 2 characters';
    }
    return false;
  }

  validateDate(date) {
    if (validator.isEmpty(date)) {
      return 'Date is required';
    } else if (!validator.isAfter(date)) {
      return 'Future date is required';
    } else {
      return false;
    }
  }

  validateZip(zip) {
    if (validator.isEmpty(zip)) {
      return 'Zip code is required';
    } else if (!validator.isPostalCode(zip, 'US')) {
      return 'Invalid zip code';
    }
    return false;
  }

  validatePhone(phone) {
    if (validator.isEmpty(phone)) {
      return 'Phone number is required';
    } else if (!validator.isMobilePhone(phone, 'en-US')) {
      return 'Invalid phone number';
    }
    return false;
  }
}

const validateFields = new ValidateFields();

// export the class instance, so we can import and use it anywhere
export { validateFields };