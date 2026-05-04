const userName = document.querySelector("#userName");
const userPass = document.querySelector("#userPass");
const loginBtn =  document.querySelector("#loginBtn");

loginBtn.addEventListener("click", function(){
    console.log(userName.value);
});