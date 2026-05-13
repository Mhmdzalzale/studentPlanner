const welcomeTxt = document.getElementById("welcomeTxt");
const currentUser = localStorage.getItem("currentUser");
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