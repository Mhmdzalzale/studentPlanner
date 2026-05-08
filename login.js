const userName = document.querySelector("#userName");
const userPass = document.querySelector("#userPass");
const loginBtn = document.querySelector("#loginBtn");
const message = document.querySelector("#msg");
loginBtn.addEventListener("click", function(){
    let users=JSON.parse(localStorage.getItem("users")) || [];
    let foundUser=users.find(function(user){
        return user.username===userName.value;
    })
    if(foundUser){
        if(userPass.value===foundUser.password){
            message.textContent="Login Successful."
            message.style.color="green"
            localStorage.setItem("currentUser", foundUser.username);
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
