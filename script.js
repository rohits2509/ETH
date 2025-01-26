document.addEventListener("DOMContentLoaded", function () {
  // Check login status on page load
  if (!sessionStorage.getItem("isLoggedIn")) {
    // Redirect to login page if not logged in
    window.location.href = "index.html";
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const loginBox = document.querySelector(".login-box");

  // Dummy credentials
  const validUsername = "vaultkeeper";
  const validPassword = "open123";

  if (username === validUsername && password === validPassword) {
    sessionStorage.setItem("isLoggedIn", true); // Set login status in sessionStorage
    window.location.href = "page2.html"; // Redirect to the Vault page
  } else {
    error.textContent = "Oops! Incorrect credentials. Try again.";
  }
});

// Placeholder functions for Buy and Sell buttons
function buyETH() {
  alert("Buy ETH functionality coming soon!");
}

function sellETH() {
  alert("Sell ETH functionality coming soon!");
}






/*


document.addEventListener("DOMContentLoaded", function () {
  // Check login status on page load
  if (!localStorage.getItem("isLoggedIn")) {
    // Redirect to login page if not logged in
    window.location.href = "index.html";
  }
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const loginBox = document.querySelector(".login-box");

  // Dummy credentials
  const validUsername = "vaultkeeper";
  const validPassword = "open123";

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("isLoggedIn", true); // Set login status in localStorage
    window.location.href = "page2.html"; // Redirect to the Vault page
  } else {
    error.textContent = "Oops! Incorrect credentials. Try again.";
  }
});

// Placeholder functions for Buy and Sell buttons
function buyETH() {
  alert("Buy ETH functionality coming soon!");
}

function sellETH() {
  alert("Sell ETH functionality coming soon!");
}
*/
