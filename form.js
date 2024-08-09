const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link"),
      checkbox = document.getElementById('logCheck');

    //   js code to show/hide password and change icon
    pwShowHide.forEach(eyeIcon =>{
        eyeIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                      if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", 'uil-eye');   
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });






    //js code to validate registration form
  document.getElementById('register').addEventListener('click', (e) => {
  let pswd1 = document.getElementById('password-1').value,
    name = document.getElementById('name').value,
    email1 = document.getElementById('email-1'),
    pswd2 = document.getElementById('confirm-password').value,
    passvalidationMessage=document.getElementById("passvalidationMessage"),
    password1 = document.getElementById('password-1'),
    password2 = document.getElementById('confirm-password'),
    secondpswd=document.getElementById('secondpswd'),
    validationMessage = document.getElementById("validationMessage1");

  const isValid = email1.checkValidity();

  if (!isValid) {
    e.preventDefault();
    email1.style.color='red';
    validationMessage1.textContent = "Please enter a valid email address.";
    validationMessage1.style.color='red';

  } else {
    validationMessage1.textContent = "";
  }

    if (pswd2 !== pswd1) {
    secondpswd.textContent = "your passwords don't match.";
    secondpswd.style.color='red';
    password2.style.color='red';
    password1.style.color='red';
  } else {
function isValidpswd1(pswd1) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return pattern.test(pswd1);
      }

 if (!isValidpswd1(pswd1)) {
  e.preventDefault();
    password1.style.color='red';
    passvalidationMessage.textContent = "password must contain 8 characters atleast one uppercase and lowercase.";
    passvalidationMessage.style.color='red';
} else {
  passvalidationMessage.textContent = "";
}
    }
    if(isValidpswd1(pswd1) && isValid){

    fetch('/register', { // Send the request to the correct relative endpoint
      method: 'post',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        name: name,
        email: email1. value, // Fix the variable name here
        password: pswd2 // Fix the variable name here
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.name) {
        alert('Registration successful');
        container.classList.remove("active")
      }else{
        alert(data.error);
    }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred during registration');
    });
  }
});

  // loginform ...........................
document.getElementById("login").addEventListener('click', (e) => {
  e.preventDefault();

  let password = document.getElementById("password").value,
    email = document.getElementById("email"),
    validationMessage = document.getElementById("validationMessage"),
    passvalidationMessage = document.getElementById("passvalidationMessage");

  const isValid = email.checkValidity();
  if (!isValid) {
    email.style.color = 'red';
    validationMessage.textContent = "Please enter a valid email address.";
    validationMessage.style.color = 'red';
    return;
  } else {
    validationMessage.textContent = "";
  }
  if (isValid) {
    fetch('/login', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          email: email.value,
          password: password
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.token) {
            if(checkbox.checked){
            document.cookie = `token=${data.token}; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
            }else{
               document.cookie = `token=${data.token}; path=/`;
            }
            let cookie = document.cookie;
            checkLoggedIn(cookie);

        } else {
          alert(data.error);
        }
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred during login');
      });
  }
});
function checkLoggedIn(cookie) {
  let tokenCookie = cookie.split('; ').find(cookie => cookie.startsWith('token='));
  if (tokenCookie) {
     alert('login successful');
     location ='/'
  }else{
    alert('please login');
 }
}

