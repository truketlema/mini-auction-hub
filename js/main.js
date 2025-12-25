// Main application logic for Mini Auction Hub

class AuctionApp {
  constructor() {
    this.auctions = [];
    this.currentUser = null;
    this.init();
  }

  async init() {
    try {
      // Show loading state
      this.showLoading(true);

      // Load auctions data
      await this.loadAuctions();

      // Update navigation based on login status
      this.updateNavigation();

      // Check user authentication for bidding
      this.updateBidSection();

      // Load bid history
      this.loadBidHistory();

      // Update statistics
      this.updateStatistics();
    } catch (error) {
      console.error("Error initializing app:", error);
      this.showError("Failed to load auction data. Please refresh the page.");
    } finally {
      this.showLoading(false);
    }

    // Setup event listeners
    this.setupEventListeners();
  }

  async loadAuctions() {
    // Try to get auctions from API/localStorage
    let data = await API.getAuctionData();

    // Get admin-added auctions from localStorage
    const storedData = JSON.parse(localStorage.getItem("auctionData")) || {};
    const adminAuctions = storedData.auctions || [];

    if (!data || !data.auctions) data = { auctions: [] };

    // Combine admin auctions + API/fallback auctions
    this.auctions = [...adminAuctions, ...(data.auctions || [])];

    // If there are still no auctions, use hardcoded fallback
    if (this.auctions.length === 0) {
      this.auctions = [
        {
          id: 101,
          title: "Vintage Collector’s Watch (1953)",
          description:
            "A rare collector's watch known for its precision and timeless design.",
          startingPrice: 80,
          currentBid: 120,
          image: "images/watch.jpg",
          brand: "Omega",
          model: "1953 Classic",
          material: "Stainless Steel",
          condition: "Excellent",
          shipping: "Worldwide",
          bidder: null,
          endTime: new Date(Date.now() + 3600 * 1000).toISOString(),
        },
        {
          id: 102,
          title: "Luxury Wristwatch (2020)",
          description:
            "Modern luxury wristwatch, sleek design, and perfect for collectors.",
          startingPrice: 150,
          currentBid: 200,
          image: "images/watch2.avif",
          brand: "Rolex",
          model: "2020 Modern",
          material: "Stainless Steel & Ceramic",
          condition: "Like New",
          shipping: "Worldwide",
          bidder: null,
          endTime: new Date(Date.now() + 7200 * 1000).toISOString(),
        },
        {
          id: 103,
          title: "Classic Gold Watch (1985)",
          description:
            "Elegant gold watch, timeless design, in excellent condition.",
          startingPrice: 200,
          currentBid: 250,
          image: "images/watch3.jpeg",
          brand: "Seiko",
          model: "1985 Classic Gold",
          material: "Gold Plated Stainless Steel",
          condition: "Excellent",
          shipping: "Worldwide",
          bidder: null,
          endTime: new Date(Date.now() + 10800 * 1000).toISOString(),
        },
      ];
    }

    // Render auctions
    this.renderAuctions();

    const defaultAuctions = document.getElementById("default-auctions");
    const auctionsGrid = document.getElementById("auctions-grid");

    if (this.auctions.length > 0) {
      if (defaultAuctions) defaultAuctions.style.display = "none";
      if (auctionsGrid) auctionsGrid.style.display = "flex";
    } else {
      this.showNoAuctions();
    }
  }

  renderAuctions() {
    const container = document.getElementById("auctions-grid");
    if (!container) return;

    container.innerHTML = "";

    this.auctions.forEach((auction) => {
      const auctionCard = this.createAuctionCard(auction);
      container.appendChild(auctionCard);
    });

    // Update select options for bidding
    this.updateBidSelectOptions();
  }

  createAuctionCard(auction) {
    const card = document.createElement("article");
    card.className = "auction-card";
    card.dataset.id = auction.id;

    const timeRemaining = this.calculateTimeRemaining(auction.endTime);

    card.innerHTML = `
            <div class="auction-image">
                <img src="${auction.image}" alt="${
      auction.title
    }" loading="lazy">
            </div>
            <div class="auction-content">
                <h3 class="auction-title">${auction.title}</h3>
                <p class="auction-description">${auction.description}</p>

                <div class="auction-details">
                    <div class="detail-row">
                        <span class="label">Starting Price:</span>
                        <span class="value">$${auction.startingPrice}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Current Bid:</span>
                        <span class="value current-bid">$${
                          auction.currentBid
                        }</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Time Remaining:</span>
                        <span class="value time-remaining">${timeRemaining}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Highest Bidder:</span>
                        <span class="value">${
                          auction.bidder || "No bids yet"
                        }</span>
                    </div>
                </div>

                <details class="auction-specs">
                    <summary>🔍 Specifications</summary>
                    <ul>
                        <li><strong>Brand:</strong> ${auction.brand}</li>
                        <li><strong>Model:</strong> ${auction.model}</li>
                        <li><strong>Material:</strong> ${auction.material}</li>
                        <li><strong>Condition:</strong> ${
                          auction.condition
                        }</li>
                        <li><strong>Shipping:</strong> ${auction.shipping}</li>
                    </ul>
                </details>

                <button class="btn-bid-now" onclick="auctionApp.selectItemForBidding(${
                  auction.id
                })">
                    Bid Now
                </button>
            </div>
        `;

    return card;
  }

  calculateTimeRemaining(endTime) {
    const end = new Date(endTime);
    const now = new Date();
    const diff = end - now;

    if (diff <= 0) return "Auction ended";

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  updateNavigation() {
    const authNav = document.getElementById("auth-nav");
    const currentUser = Auth.getCurrentUser();

    if (currentUser) {
      authNav.innerHTML = `
                <span class="user-greeting">Welcome, ${
                  currentUser.fullName.split(" ")[0]
                }!</span>
                <a href="profile.html" class="btn-profile">Profile</a>
                <a href="#" onclick="Auth.logout()" class="btn-logout">Logout</a>
            `;
    }
  }

  updateBidSection() {
    const loginPrompt = document.getElementById("bid-login-prompt");
    const bidForm = document.getElementById("bid-form-container");
    const currentUser = Auth.getCurrentUser();

    if (currentUser) {
      loginPrompt.style.display = "none";
      bidForm.style.display = "block";
    } else {
      loginPrompt.style.display = "block";
      bidForm.style.display = "none";
    }
  }

  updateBidSelectOptions() {
    const select = document.getElementById("selected-item");
    if (!select) return;

    // Clear existing options except the first one
    while (select.children.length > 1) {
      select.removeChild(select.lastChild);
    }

    this.auctions.forEach((auction) => {
      const option = document.createElement("option");
      option.value = auction.id;
      option.textContent = `${auction.title} (Current: $${auction.currentBid})`;
      select.appendChild(option);
    });
  }

  selectItemForBidding(auctionId) {
    const select = document.getElementById("selected-item");
    const auction = this.auctions.find((a) => a.id === auctionId);

    if (select && auction) {
      select.value = auctionId;
      this.updateMinimumBid(auction);

      // Scroll to bidding section
      document.getElementById("bidding").scrollIntoView({ behavior: "smooth" });
    }
  }

  updateMinimumBid(auction) {
    const minimumElement = document.getElementById("bid-minimum");
    const bidInput = document.getElementById("bid-amount");

    if (auction && minimumElement && bidInput) {
      const minBid = auction.currentBid + 1;
      minimumElement.textContent = `Minimum bid: $${minBid}`;
      bidInput.min = minBid;
      bidInput.placeholder = `Minimum: $${minBid}`;
    }
  }

  loadBidHistory() {
    const container = document.getElementById("bid-history-list");
    if (!container) return;

    const allBids = [];
    const users = JSON.parse(localStorage.getItem("auctionUsers")) || [];

    users.forEach((user) => {
      if (user.bids) {
        user.bids.forEach((bid) => {
          allBids.push({
            ...bid,
            bidderName: user.fullName,
            bidderUsername: user.username,
          });
        });
      }
    });

    allBids.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (allBids.length === 0) {
      container.innerHTML = '<p class="no-bids">No bids placed yet.</p>';
      return;
    }

    container.innerHTML = "";
    allBids.slice(0, 10).forEach((bid) => {
      const bidItem = document.createElement("div");
      bidItem.className = "bid-item";

      const bidTime = new Date(bid.timestamp);
      const timeString =
        bidTime.toLocaleDateString() + " " + bidTime.toLocaleTimeString();

      bidItem.innerHTML = `
                <div class="bid-info">
                    <strong>${bid.bidderName}</strong> bid <strong>$${bid.amount}</strong>
                    on Auction #${bid.auctionId}
                </div>
                <div class="bid-time">${timeString}</div>
            `;

      container.appendChild(bidItem);
    });
  }

  updateStatistics() {
    const totalBidsElement = document.getElementById("total-bids");
    const activeAuctionsElement = document.getElementById("active-auctions");
    const totalValueElement = document.getElementById("total-value");

    const users = JSON.parse(localStorage.getItem("auctionUsers")) || [];
    let totalBids = 0;
    let totalValue = 0;

    users.forEach((user) => {
      if (user.bids) {
        totalBids += user.bids.length;
        totalValue += user.bids.reduce((sum, bid) => sum + bid.amount, 0);
      }
    });

    const activeAuctions = this.auctions.length;

    if (totalBidsElement) totalBidsElement.textContent = totalBids;
    if (activeAuctionsElement)
      activeAuctionsElement.textContent = activeAuctions;
    if (totalValueElement) totalValueElement.textContent = `$${totalValue}`;
  }

  setupEventListeners() {
    const bidForm = document.getElementById("bidForm");
    if (bidForm) {
      bidForm.addEventListener("submit", (e) => this.handleBidSubmission(e));
    }

    const itemSelect = document.getElementById("selected-item");
    if (itemSelect) {
      itemSelect.addEventListener("change", (e) => {
        const auctionId = parseInt(e.target.value);
        const auction = this.auctions.find((a) => a.id === auctionId);
        if (auction) {
          this.updateMinimumBid(auction);
        }
      });
    }
  }

  async handleBidSubmission(e) {
    e.preventDefault();

    const currentUser = Auth.getCurrentUser();
    if (!currentUser) {
      alert("Please login to place a bid!");
      window.location.href = "login.html";
      return;
    }

    const auctionId = parseInt(document.getElementById("selected-item").value);
    const bidAmount = parseFloat(document.getElementById("bid-amount").value);

    if (!auctionId || !bidAmount) {
      alert("Please select an item and enter a bid amount.");
      return;
    }

    const auction = this.auctions.find((a) => a.id === auctionId);
    if (!auction) {
      alert("Selected auction not found.");
      return;
    }

    const minBid = auction.currentBid + 1;
    if (bidAmount < minBid) {
      alert(`Your bid must be at least $${minBid}.`);
      return;
    }

    const submitBtn = document.getElementById("submitBidBtn");
    const btnText = submitBtn.querySelector(".btn-text");
    const btnLoading = submitBtn.querySelector(".btn-loading");

    submitBtn.disabled = true;
    btnText.style.display = "none";
    btnLoading.style.display = "inline";

    try {
      const bid = {
        auctionId: auctionId,
        amount: bidAmount,
        timestamp: new Date().toISOString(),
      };

      const updatedUser = { ...currentUser };
      if (!updatedUser.bids) updatedUser.bids = [];
      updatedUser.bids.push(bid);

      const result = Auth.updateUser(updatedUser);
      if (result.success) {
        auction.currentBid = bidAmount;
        auction.bidder = currentUser.username;

        alert(
          `Bid submitted successfully!\nAmount: $${bidAmount}\nAuction: ${auction.title}`
        );

        document.getElementById("bid-amount").value = "";
        document.getElementById("selected-item").value = "";

        this.loadBidHistory();
        this.updateStatistics();
        this.renderAuctions();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Bid submission error:", error);
      alert("Failed to submit bid. Please try again.");
    } finally {
      submitBtn.disabled = false;
      btnText.style.display = "inline";
      btnLoading.style.display = "none";
    }
  }

  showLoading(show) {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = show ? "block" : "none";
  }

  showNoAuctions() {
    const noAuctions = document.getElementById("no-auctions");
    const auctionsGrid = document.getElementById("auctions-grid");

    if (auctionsGrid) auctionsGrid.style.display = "none";
    if (noAuctions) noAuctions.style.display = "block";
  }

  showError(message) {
    const container = document.querySelector(".main-content");
    if (container) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message";
      errorDiv.innerHTML = `<p>${message}</p>`;
      container.insertBefore(errorDiv, container.firstChild);
    }
  }
}

// Initialize the app
let auctionApp;
document.addEventListener("DOMContentLoaded", function () {
  auctionApp = new AuctionApp();
});
