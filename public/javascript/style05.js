const users = [
  { id: 1, username: "admin", password: "1111", role: 1 },
  { id: 2, username: "aaa", password: "2222", role: 2 },
  { id: 3, username: "bbb", password: "3333", role: 2 }
];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Username or Password is incorrect",
      confirmButtonText: "OK"
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Login Successful",
    text: `Welcome ${user.username}`,
    confirmButtonText: "OK"
  });
}
