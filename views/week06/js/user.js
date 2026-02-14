let currentUser = JSON.parse(sessionStorage.currentUser || "null");

if (!currentUser || currentUser.role != 2) {
    window.location = "login.html";
}

document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("currentUser");
    window.location = "login.html";
});
