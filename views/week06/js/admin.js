let currentUser = JSON.parse(sessionStorage.currentUser || "null");

if (!currentUser || currentUser.role != 1) {
    window.location = "login.html";
}

let users = JSON.parse(sessionStorage.users);
let table = document.getElementById("userTable");

function loadUsers() {

    table.innerHTML = "";

    users.forEach(user => {

        let disabled = user.role == 1 ? "disabled" : "";

        let row = `
        <tr>
            <td>${user.id}</td>
            <td>${user.username}</td>
            <td>${user.role == 1 ? "Admin" : "User"}</td>
            <td>
                <label class="switch">
                    <input type="checkbox" 
                        ${user.status ? "checked" : ""} 
                        ${disabled}
                        onchange="toggleStatus(${user.id})">
                    <span class="slider"></span>
                </label>
                ${user.status ? "Enable" : "Disable"}
            </td>
        </tr>
        `;

        table.innerHTML += row;
    });

    sessionStorage.users = JSON.stringify(users);
}

function toggleStatus(id) {

    let user = users.find(u => u.id === id);

    if (user.role == 1) return; 

    user.status = !user.status;

    loadUsers();
}

document.getElementById("logoutBtn").addEventListener("click", function () {
    sessionStorage.removeItem("currentUser");
    window.location = "login.html";
});

loadUsers();
