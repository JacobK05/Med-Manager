// process the Login button being clicked on the login form
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    // rendered on the server with the views done by the login handlebars
    // this is client side js
    // this gets called when the user enters info in the login form handler
    // this api call gets processed by the router/controller called user-routes.js, api/controllers folder
    const response = await fetch("/api/userRouter/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/medication'); 
    } else {
      alert("Invalid username or password. Please try again.");
    }
  } else {
    alert("Invalid username or password. Please try again.");
  }
};

// process the Signup button being clicked on the signup form
const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const firstName = document.querySelector("#first-name").value.trim();
  const middleName = document.querySelector("#middle-name").value.trim();
  const lastName = document.querySelector("#last-name").value.trim();

  if (email && password) {
    const response = await fetch("/api/userRouter", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        firstName,
        middleName,
        lastName,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/medication");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// wait for the Login button on the login form to be clicked
document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

// wait for the Signup button on the signup form to be clicked
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
