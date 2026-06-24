const currentUser = localStorage.getItem("currentUser");

let users = JSON.parse(localStorage.getItem("users")) || [];

let loggedInUser = users.find(function(user) {
    return user.username === currentUser;
});


const welcomeTxt = document.getElementById("welcomeTxt");
console.log("current user ", currentUser);
if(!currentUser) {
    window.location.href = "index.html";
} else {
    welcomeTxt.textContent = `Welcome, ${currentUser}!`;
}
const tasksBtn = document.querySelector("#tasksBtn");
const assignmentsBtn = document.querySelector("#assignmentsBtn");
const scheduleBtn = document.querySelector("#scheduleBtn");
const dashboardBtn = document.querySelector("#dashboardBtn");

const homeSection = document.querySelector("#homeSection");
const tasksSection = document.querySelector("#tasksSection");
const assignmentsSection = document.querySelector("#assignmentsSection");
const scheduleSection = document.querySelector("#scheduleSection");
function showSection(sectionToShow) {
    homeSection.classList.add("hidden");
    tasksSection.classList.add("hidden");
    assignmentsSection.classList.add("hidden");
    scheduleSection.classList.add("hidden");

    sectionToShow.classList.remove("hidden");
}
tasksBtn.addEventListener("click", function () {
    showSection(tasksSection);
});

assignmentsBtn.addEventListener("click", function () {
    showSection(assignmentsSection);
});

scheduleBtn.addEventListener("click", function () {
    showSection(scheduleSection);
});
dashboardBtn .addEventListener("click", function () {
    showSection(homeSection);
});
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
addTaskBtn.addEventListener("click", function() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        return;
    }
    if (!loggedInUser.tasks) {
    loggedInUser.tasks = [];
}
    loggedInUser.tasks.push(taskText);
    localStorage.setItem("users", JSON.stringify(users));

    const li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);
    taskInput.value = "";
});
const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click", function() {

    const confirmed = confirm("Are you sure you want to log out?");

    if (confirmed) {
        localStorage.removeItem("currentUser");
        window.location.href = "index.html";
    }

});