const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const lowerBar = document.querySelector(".lower-bar");
const main = document.querySelector("main");

const HIDDEN_CLASSNAME = "hidden";
const TRANSPARENCY_CLASSNAME = "transparency";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `안녕하세요 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  main.classList.remove(TRANSPARENCY_CLASSNAME);
  lowerBar.classList.remove(TRANSPARENCY_CLASSNAME);
}

if (savedUsername === null) {
  main.classList.add(TRANSPARENCY_CLASSNAME);
  lowerBar.classList.add(TRANSPARENCY_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
