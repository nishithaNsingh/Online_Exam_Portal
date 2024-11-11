document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Faculty").addEventListener("click", function() {
        window.location.href = 'faculty_singin.html';
    });
    document.getElementById("Student").addEventListener("click", function() {
        window.location.href = 'faculty_singin.html';
    });
});


const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
 loginForm.style.marginLeft = "-50%";
 loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
 loginForm.style.marginLeft = "0%";
 loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
 signupBtn.click();
 return false;
});