inputEl.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = event.currentTarget.dataset.length;

  this.classList.add('invalid');
  this.classList.remove('valid');

  if (valueLength == requiredLength) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
}


const inputEl = document.querySelector('input');
inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});

age > 18 ? (  alert("Хорошо, вы можете продолжить."),  location.assign("continue.html")) : (  stop = true,  alert("Простите, вы ещё так юны!"));



const formEl = document.querySelector(".login-form");
const inputEmail = document.querySelector ('input[name="email"]');
const inputPassword = document.querySelector ('input[name="password"]');
const inputButton = document.querySelector ('button');

formEl.addEventListener('submit',(event)=>{inputEmail.value===""||inputPassword.value===""?(alert("Заполните, пожалуйста, поля: Email и Password!"), event.preventDefault()):
(
    event.preventDefault();
    const {elements:{email,password}} = event.currentTarget;
    console.log(email.value, password.value);
    formEl.reset();
)
}
)

console.log(formEl, inputEmail, inputPassword,inputButton)
console.log(elements)