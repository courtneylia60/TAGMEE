// ===============================
// TAGMEE JavaScript
// ===============================

// Welcome message
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to TAGMEE");

    showGreeting();
    updateClock();
});

// Greeting
function showGreeting() {
    const hour = new Date().getHours();
    const hero = document.querySelector(".hero h3");

    if (!hero) return;

    if (hour < 12) {
        hero.textContent = "☀️ Good Morning";
    } else if (hour < 18) {
        hero.textContent = "🌤 Good Afternoon";
    } else {
        hero.textContent = "🌙 Good Evening";
    }
}

// Live Clock
function updateClock() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    setInterval(() => {
        const now = new Date();

        clock.innerHTML =
            now.toLocaleTimeString();
    }, 1000);
}

// Buy Shares
function buyShares() {

    const shares =
        Number(document.getElementById("shares").value);

    const price = 175.30;

    if (!shares || shares <= 0) {
        alert("Enter number of shares.");
        return;
    }

    const total = shares * price;

    document.getElementById("total").innerHTML =
        "$" + total.toFixed(2);

    alert("Purchase successful!");
}

// Deposit
function depositMoney() {

    const amount =
        Number(document.getElementById("depositAmount").value);

    if (amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    alert("$" + amount + " deposit request submitted.");
}

// Withdraw
function withdrawMoney() {

    const amount =
        Number(document.getElementById("withdrawAmount").value);

    if (amount <= 0) {
        alert("Enter a valid amount.");
        return;
    }

    alert("Withdrawal request submitted.");
}

// Search Companies
function searchCompany() {

    let input =
        document.getElementById("search").value.toLowerCase();

    let cards =
        document.querySelectorAll(".card");

    cards.forEach(card => {

        if (
            card.innerText.toLowerCase().includes(input)
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}

// Simple Notification
function notify(message) {

    const box = document.createElement("div");

    box.innerHTML = message;

    box.style.position = "fixed";
    box.style.bottom = "20px";
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)";
    box.style.background = "#8b5cf6";
    box.style.color = "white";
    box.style.padding = "15px 25px";
    box.style.borderRadius = "12px";
    box.style.zIndex = "9999";

    document.body.appendChild(box);

    setTimeout(() => {
        box.remove();
    }, 3000);

}
<nav>
    <a href="index.html">Home</a>
    <a href="markets.html">Markets</a>
    <a href="portfolio.html">Portfolio</a>
    <a href="orders.html">Orders</a>
    <a href="deposit.html">Deposit</a>
    <a href="withdraw.html">Withdraw</a>
    <a href="profile.html">Profile</a>
</nav>
