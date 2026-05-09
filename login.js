const userName = document.querySelector("#userName");
const userPass = document.querySelector("#userPass");
const loginBtn = document.querySelector("#loginBtn");
const message = document.querySelector("#msg");
console.log("login.js loaded");

console.log(loginBtn);
loginBtn.addEventListener("click", function(){
    console.log("Login button clicked");
    let users=JSON.parse(localStorage.getItem("users")) || [];
    let foundUser=users.find(function(user){
        return user.username===userName.value;
    });
    console.log(loginBtn);
    if(foundUser){
        if(userPass.value===foundUser.password){
            message.textContent="Login Successful."
            message.style.color="green"
            localStorage.setItem("currentUser", foundUser.username);
            console.log(localStorage.getItem("currentUser"));
            window.location.href="dashboard.html"
        }
        else
            message.textContent="Incorect Password."
    }
    else{
        message.textContent="User doesnt exist."
        message.style.color="red";
    }
});
