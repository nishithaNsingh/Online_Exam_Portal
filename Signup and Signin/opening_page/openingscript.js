document.addEventListener("DOMContentLoaded", function () {
    // Faculty Click event
    document.getElementById("Faculty")?.addEventListener("click", function () {
        window.location.href = 'faculty_signin.html';
    });
    
    // Student Click event
    document.getElementById("Student")?.addEventListener("click", function () {
        window.location.href = 'Student_signin.html';
    });

    // Student SignUp Button
    const studentSignupButton = document.getElementById("Ssignup");
    if (studentSignupButton) {
        studentSignupButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            window.location.replace('/Student_Dashboard/S_dashboard.html');
        });
    }

    // Student Login Button
    const studentLoginButton = document.getElementById("Slogin");
    if (studentLoginButton) {
        studentLoginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            window.location.replace('/Student_Dashboard/S_dashboard.html');
        });
    }

    // Faculty SignUp Button
    const facultySignupButton = document.getElementById("Fsignup");
    if (facultySignupButton) {
        facultySignupButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            window.location.replace('/Teacher_Dashboard/F_dashboard.html');
        });
    }

    // Faculty Login Button
    const facultyLoginButton = document.getElementById("Flogin");
    if (facultyLoginButton) {
        facultyLoginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent form submission
            window.location.replace('/Teacher_Dashboard/F_dashboard.html');
        });
    }
});

// Form slide for login/signup
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Slide functionality for login and signup forms
signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

signupLink.onclick = () => {
    signupBtn.click();
    return false;
};

// Adjust form container height based on selected form
const loginRadio = document.getElementById('login');
const signupRadio = document.getElementById('signup');
const formContainer = document.getElementById('formContainer');

function adjustFormHeight() {
  if (signupRadio.checked) {
    formContainer.style.height = '500px';
  } else {
    formContainer.style.height = '350px';
  }
}

adjustFormHeight(); // Initial call to set height based on default checked form

loginRadio.addEventListener('change', adjustFormHeight);
signupRadio.addEventListener('change', adjustFormHeight);
