// const form = document.querySelector(".form");
// const firstName = document.querySelector("#firstName");
// const secondName = document.querySelector("#secondName");
// const email = document.querySelector("#email");
// const password = document.querySelector("#password");
// const confirmPassword = document.querySelector("#confirmPassword");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   checkInputs();
// });

// function checkInputs() {
//   const firstNameValue = firstName.value.trim();
//     console.log(firstNameValue);
//   const secondNameValue = secondName.value.trim();

//   const emailValue = email.value.trim();

//   const passwordValue = password.value.trim();

//   const confirmPasswordValue = confirmPassword.value.trim();
//   if (firstNameValue === "") {
//     //show error
//     //add error class

//     setError(firstName, "FirstName Cannot be Blank");
//   } else {
//     //add success class
//     setSuccess(firstName)
//   }
// }

// function setError(input, message){
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small')

//     //add error message inside small
//     small.innerText = message;

//     formControl.className = 'form-control error'
// }