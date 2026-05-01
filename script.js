async function login() {
  const res = await fetch("http://localhost:5000/api/v1/auth/login", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.json();
  localStorage.setItem("token", data.token);
  alert("Login success");
}