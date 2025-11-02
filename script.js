function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  const correctUsername = "user";
  const correctPassword = "1234";

  if (username === correctUsername && password === correctPassword) {
    window.location.href = "calculator.html";
  } else {
    error.textContent = "نام کاربری یا رمز عبور اشتباه است.";
  }
}