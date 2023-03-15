import {
  Validator,
  isNotEmpty,
  minMaxLength,
  isEmail,
  isPassword,
  confirmPassword,
} from "./validator.js";

const formConfigs = {
  "enter-username": [isNotEmpty, minMaxLength],
  "enter-email": [isNotEmpty, isEmail],
  "enter-password": [isNotEmpty, isPassword],
  "reenter-password": [isNotEmpty, confirmPassword],
};

const init = function () {
  let form = document.registrate;
  let sendBtn = form.querySelector(".send-form");

  sendBtn.onclick = function (event) {
    event.preventDefault();

    [...form.elements].forEach((el) => {
      if (el.type !== "submit") {
        let messageError = form.querySelector(`[data-for="${el.name}"]`);
        messageError.innerHTML = "";
        el.classList.remove("error");
      }
    });

    let isValid = Validator.validate(formConfigs, form);

    if (!isValid) {
      console.log(Validator.getErrors(form.name));
      Object.entries(Validator.getErrors(form.name)).forEach(
        ([name, error]) => {
          let messageError = form.querySelector(`[data-for="${name}"]`);
          form.elements[name].classList.add("error");
          messageError.innerHTML = Object.values(error)
            .map((message) => `<span>${message}</span>`)
            .join("<br>");
        }
      );

      return;
    }
  };

  form.addEventListener("input", function (event) {
    let target = event.target;
    if (!formConfigs[target.name]) return;

    let isValid = Validator.validate(
      { [target.name]: formConfigs[target.name] },
      form
    );
    let errors = Object.values(
      Validator.getErrors(form.name)?.[target.name] || {}
    );
    let messageError = form.querySelector(`[data-for="${target.name}"]`);

    if (!isValid) {
      target.classList.add("error");
      messageError.innerHTML = errors
        .map((message) => `<span>${message}</span>`)
        .join("<br>");
    } else {
      target.classList.remove("error");
      target.classList.add("correct");
      messageError.innerHTML = "";
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
