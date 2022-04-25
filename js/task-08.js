const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(event) {
  event.preventDefault();
  const userEmail = event.currentTarget.elements.email.value;
  const userPass = event.currentTarget.elements.password.value;
  const userData = {
    userEmail,
    userPass,
  };

  if (userEmail === '' || userPass === '') {
    return alert('Please fill out all the fields of the form!');
  }

  console.log(userData);
  event.currentTarget.reset();
}
