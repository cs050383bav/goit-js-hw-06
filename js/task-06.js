const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', () => {
  event.currentTarget.value.length === Number(inputEl.dataset.length)
    ? (inputEl.classList.add('valid'), inputEl.classList.remove('invalid'))
    : (inputEl.classList.add('invalid'), inputEl.classList.remove('valid'))
  console.log(inputEl)

  // console.dir(event.currentTarget.value.length);
  // console.dir(inputEl.dataset.length);
  // console.log(typeof event.currentTarget.value.length);
  // console.log(typeof inputEl.dataset.length);
  // console.log(typeof Number(inputEl.dataset.length));


  // inputEl.value = "";
})

