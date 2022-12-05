const SUBMIT = 'submit'
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener(SUBMIT, (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
  if(!email.value.length || !password.value.length){
    alert('Email and password must not be empty!!!');
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
    event.currentTarget.reset();
  }
});

