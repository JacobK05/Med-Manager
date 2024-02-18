// process the Login button being clicked
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      // rendered on the server with the views done by the login handlebars 
      // this is client side js
      // this gets called when the user enters info in the login form handler
      // this api call gets processed by the router/controller called user-routes.js, api/controllers folder
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');  // relocate to the home page
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  // process the Signup button being clicked
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  // wait for the Login button to be clicked
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
    // wait for the Signup button to be clicked
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  