const items = [
  {
    id: 1,
    name: "Vintage Collector’s Watch",
    highestBid: 120,
    timeLeft: 4800,
    bids: ["John — $120"],
  },
  {
    id: 2,
    name: "Luxury Wristwatch",
    highestBid: 200,
    timeLeft: 7800,
    bids: ["Sarah — $200"],
  },
  {
    id: 3,
    name: "Classic Gold Watch",
    highestBid: 250,
    timeLeft: 11145,
    bids: ["Mark — $250"],
  },
];

/* =======================
   RESTORE SAVED DATA
======================= */
const saved = JSON.parse(localStorage.getItem("auctionData"));
if (saved) {
  saved.forEach((savedItem, index) => {
    items[index] = { ...items[index], ...savedItem };
  });
}

/* =======================
   INITIALIZE REAL END TIME
======================= */
items.forEach((item) => {
  if (!item.endTime) {
    item.endTime = Date.now() + item.timeLeft * 1000;
  }
});

/* =======================
   CREATE ITEM SELECT
======================= */
const itemSelect = document.createElement("select");
itemSelect.id = "item-select";

items.forEach((item) => {
  const option = document.createElement("option");
  option.value = item.id;
  option.textContent = item.name;
  itemSelect.appendChild(option);
});

document.querySelector("#bidding fieldset").prepend(itemSelect);

/* =======================
   DOM REFERENCES
======================= */
const historyList = document.querySelector("#history ol");
const bidAmount = document.getElementById("bid-amount");
const bidderName = document.getElementById("bidder-name");
const form = document.querySelector("form");

/* =======================
   HISTORY RENDER
======================= */
function renderHistory(item) {
  historyList.innerHTML = "";
  item.bids.forEach((bid) => {
    const li = document.createElement("li");
    li.textContent = bid;
    historyList.appendChild(li);
  });
}

/* =======================
   BID SUBMISSION
======================= */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = items.find((i) => i.id == itemSelect.value);
  const amount = Number(bidAmount.value);
  const name = bidderName.value.trim();

  if (!name || !amount) return alert("Fill all fields.");
  if (item.timeLeft <= 0) return alert("Auction ended.");
  if (amount <= item.highestBid)
    return alert("Bid must be higher than current bid.");

  item.highestBid = amount;
  item.bids.unshift(`${name} — $${amount}`);
  item.bids = item.bids.slice(0, 6);

  localStorage.setItem("auctionData", JSON.stringify(items));
  renderHistory(item);

  bidAmount.value = "";
  bidderName.value = "";
});

/* =======================
   ITEM CHANGE
======================= */
itemSelect.addEventListener("change", () => {
  const item = items.find((i) => i.id == itemSelect.value);
  renderHistory(item);
});

/* =======================
   REAL COUNTDOWN TIMER
======================= */
setInterval(() => {
  const now = Date.now();

  items.forEach((item) => {
    const remaining = Math.floor((item.endTime - now) / 1000);
    item.timeLeft = remaining > 0 ? remaining : 0;
  });

  localStorage.setItem("auctionData", JSON.stringify(items));
}, 1000);

/* =======================
   INITIAL LOAD
======================= */
renderHistory(items[0]);
