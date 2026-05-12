const welcomeTxt = document.getElementById("welcomeTxt");
const currentUser = localStorage.getItem("currentUser");
console.log("current user ", currentUser);
if(!currentUser) {
    window.location.href = "index.html";
} else {
    welcomeTxt.textContent = `Welcome, ${currentUser}!`;
}
const dashboardBtn = document.getElementById("dashboardBtn");
const assignmentsBtn = document.getElementById("assignmentsBtn");
const tasksBtn = document.getElementById("tasksBtn");
const scheduleBtn = document.getElementById("scheduleBtn");
const logoutBtn = document.getElementById("logoutBtn");