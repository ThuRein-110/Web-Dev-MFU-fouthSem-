var users = [];

if (sessionStorage.users == null) {

    users = [
        { id: 1, username: "admin", password: "1111", role: 1, status: true },
        { id: 2, username: "aaa", password: "2222", role: 2, status: true },
        { id: 3, username: "bbb", password: "3333", role: 2, status: false }
    ];

    sessionStorage.users = JSON.stringify(users);

} else {
    users = JSON.parse(sessionStorage.users);
}

document.getElementById("loginBtn").addEventListener("click", function () {

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let user = users.find(u => u.username === uname && u.password === pass);

    if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Username or Password is incorrect'
        });
        return;
    }

    if (!user.status) {
        Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: 'Your account is disabled'
        });
        return;
    }

    sessionStorage.currentUser = JSON.stringify(user);

    if (user.role == 1) {
        window.location = "admin.html";
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'Welcome ' + user.username
        });
    }
});
