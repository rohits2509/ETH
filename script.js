document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");
  const successPage = document.getElementById("successPage");
  const loginBox = document.querySelector(".login-box");

  // Dummy credentials
  const validUsername = "vaultkeeper";
  const validPassword = "open123";

  if (username === validUsername && password === validPassword) {
    loginBox.classList.add("hidden");
    successPage.classList.remove("hidden");
    fetchETHPrice(); // Fetch ETH price upon successful login
  } else {
    error.textContent = "Oops! Incorrect credentials. Try again.";
  }
});

// Fetch Ethereum price using Coinbase API
async function fetchETHPrice() {
  const ethPriceElement = document.getElementById("ethPrice");
  try {
    const response = await fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot");
    const data = await response.json();
    const ethPrice = data.data.amount;
    ethPriceElement.textContent = Current ETH Price: $${ethPrice};
  } catch (error) {
    ethPriceElement.textContent = "Error fetching ETH price. Please try again later.";
  }
}

// Placeholder functions for Buy and Sell buttons
function buyETH() {
  alert("Buy ETH functionality coming soon!");
}

function sellETH() {
  alert("Sell ETH functionality coming soon!");
}
