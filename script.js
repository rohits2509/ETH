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

 // Fetch recent Ethereum transactions from Etherscan
    async function fetchRecentTransactions() {
      const transactionList = document.getElementById("transactionList");
      const address = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"; // Example Ethereum address
      const apiKey = "YOUR_ETHERSCAN_API_KEY"; // Replace with your API key

      try {
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=${apiKey}`);
        const data = await response.json();

        if (data.status === "1" && data.result.length > 0) {
          transactionList.innerHTML = ""; // Clear the placeholder text
          const transactions = data.result.slice(0, 5); // Show the latest 5 transactions

          transactions.forEach((tx) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
              <strong>Hash:</strong> ${tx.hash} <br>
              <strong>From:</strong> ${tx.from} <br>
              <strong>To:</strong> ${tx.to} <br>
              <strong>Value:</strong> ${tx.value / 10 ** 18} ETH <br>
              <strong>Time:</strong> ${new Date(tx.timeStamp * 1000).toLocaleString()}
            `;
            transactionList.appendChild(listItem);
          });
        } else {
          transactionList.innerHTML = "<li>No transactions found or API error.</li>";
        }
      } catch (error) {
        transactionList.innerHTML = "<li>Error fetching transactions. Please try again later.</li>";
      }
    }
