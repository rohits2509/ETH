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


// Placeholder functions for Buy and Sell buttons
function buyETH() {
  alert("Buy ETH functionality coming soon!");
}

function sellETH() {
  alert("Sell ETH functionality coming soon!");
}

// Simulate dynamic Ethereum transactions
const transactionFeed = document.getElementById("transactionFeed");

function getRandomHash() {
  return "0x" + Array(64)
    .fill(0)
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

function getRandomAddress() {
  return "0x" + Array(40)
    .fill(0)
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

function getRandomValue() {
  return (Math.random() * 10).toFixed(4); // Random value in ETH
}

function getRandomTimestamp() {
  return new Date().toLocaleTimeString();
}

function addTransaction() {
  const transaction = document.createElement("li");
  transaction.classList.add("transaction-item");
  transaction.innerHTML = `
    <p><strong>Hash:</strong> <span class="transaction-hash">${getRandomHash()}</span></p>
    <p><strong>From:</strong> ${getRandomAddress()}</p>
    <p><strong>To:</strong> ${getRandomAddress()}</p>
    <p><strong>Value:</strong> ${getRandomValue()} ETH</p>
    <p><strong>Time:</strong> ${getRandomTimestamp()}</p>
  `;
  transactionFeed.prepend(transaction); // Add new transactions at the top

  // Limit the feed to 10 transactions
  if (transactionFeed.children.length > 10) {
    transactionFeed.removeChild(transactionFeed.lastChild);
  }
}

// Generate a new transaction every 2 seconds
setInterval(addTransaction, 2000);
