import ValidationError from "./validation-error.js";

export const Validator = {
  errors: {},
  validators: {
    isNotEmpty: {
      validate: (value) => value !== "",
      message: "The field can't be empty.",
      errorType: "required",
    },
    minMaxLength: {
      validate: (value) => value.length >= 3 && value.length <= 25,
      message: "Username must be between 3 and 25 characters.",
      errorType: "required",
    },
    isEmail: {
      validate: (value) =>
        /^[A-Za-z\._\0-9]*[@]*[A-Za-z]*[\.][a-z]{2,4}$/.test(value),
      message:
        "Write the correct form of email. For example, hello@example.com",
      errorType: "required",
    },
    isPassword: {
      validate: (value) =>
        value.length >= 8 &&
        value.search(/[A-Za-z0-9]/) !== -1 &&
        value.search(/[!|@|#|$|%|^|&|*|(|)|-|_]/) !== -1,
      message:
        "The password must has at least 8 characters that include at least 1 lovercase character, 1 uppercase character, 1 number, and 1 special character in",
      errorType: "required",
    },
    confirmPassword: {
      validate: (rePassword) =>
        document.getElementById("password").value === rePassword,
      message: "The confirm password must match the entered password",
      errorType: "number",
    },
  },

  validate(config, form) {
    if (!(form instanceof HTMLFormElement)) {
      throw new ValidationError("You should provide HTML Form");
    }

    let elements = form.elements;
    this.errors[form.name] = {};

    for (const [inputName, inputValidators] of Object.entries(config)) {
      if (!inputValidators.length) {
        continue;
      }

      if (!elements[inputName]) {
        throw new ValidationError(
          `The [${inputName}] field doesn't exist in the [${form.name}]`
        );
      }

      const value = elements[inputName].value;
      let errors = this.errors[form.name];

      inputValidators.forEach(({ validate, errorType, message }) => {
        if (!validate(value)) {
          errors[inputName] = {
            ...errors[inputName],
            [errorType]: message,
          };
        }
      });
    }

    return !this.hasError(form.name);
  },

  hasError(formName) {
    return !!Object.keys(this.errors[formName]).length;
  },

  getErrors(formName) {
    return this.errors[formName];
  },
};

export const {
  isNotEmpty,
  minMaxLength,
  isEmail,
  isPassword,
  confirmPassword,
} = Validator.validators;
