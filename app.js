const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event)
{
   event.preventDefault(); 
   loginForm.classList.add(HIDDEN_CLASSNAME);
   localStorage.setItem(USERNAME_KEY,loginInput.value);
   paintGreetings();
}

loginForm.addEventListener("submit",onLoginSubmit);

function paintGreetings()
{
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername ===NULL)
{
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener()
}else{
   paintGreetings();
}