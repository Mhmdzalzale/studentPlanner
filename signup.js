function togglePassword(){
   const input= document.getElementById("userPass");
   const confirmInput= document.getElementById("confirmUserPass");
   const button=event.target;
    if(input.type==="password"){
        input.type="text";
        confirmInput.type="text";
        button.textContent="Hide password";
    }
    else {
        input.type="password";
        confirmInput.type="password";
        button.textContent="Show password"
    }

}
const signupBtn= document.querySelector("#signupBtn");
const userInput= document.querySelector("#userName");
const userPass= document.querySelector("#userPass");
const confirmUserPass= document.querySelector("#confirmUserPass");
const message=document.getElementById("msg")
signupBtn.addEventListener("click", function(event){
    if(userPass.value !== confirmUserPass.value){
    message.textContent="Passwords dont match."
    message.style.color="red" 
        return;
    }
    else{
        message.textContent="Passwords match"
        message.style.color="green"
        let users=JSON.parse(localStorage.getItem("users"))||[];
        const newUser={
            username: userInput.value,
            password: userPass.value
        };
        users.push(newUser);
    localStorage.setItem("users",JSON.stringify(users));
    }
})

