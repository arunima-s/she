const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login_button = document.querySelector("#login-button");

sign_up_btn.addEventListener('click', ()=>{
    container.classList.add("sign-up-mode");
    container.classList.remove("sign-in-mode");
});
sign_in_btn.addEventListener('click', ()=>{
    container.classList.remove("sign-up-mode");
    // container.classList.remove("sign-in-mode");
});

login_button.addEventListener("click", function() {
    window.location.href = "home.html";
});