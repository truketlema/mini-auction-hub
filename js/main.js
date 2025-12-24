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
            console.error('Error initializing app:', error);
            this.showError('Failed to load auction data. Please refresh the page.');
        } finally {
            this.showLoading(false);
        }

        // Setup event listeners
        this.setupEventListeners();
    }

    async loadAuctions() {
        const data = await API.getAuctionData();
        if (data && data.auctions) {
            this.auctions = data.auctions;
            this.renderAuctions();
        } else {
            this.showNoAuctions();
        }
    }

    renderAuctions() {
        const container = document.getElementById('auctions-grid');
        if (!container) return;

        container.innerHTML = '';

        this.auctions.forEach(auction => {
            const auctionCard = this.createAuctionCard(auction);
            container.appendChild(auctionCard);
        });

        // Update select options for bidding
        this.updateBidSelectOptions();
    }

    createAuctionCard(auction) {
        const card = document.createElement('article');
        card.className = 'auction-card';
        card.dataset.id = auction.id;

        const timeRemaining = this.calculateTimeRemaining(auction.endTime);

        card.innerHTML = `
            <div class="auction-image">
                <img src="${auction.image}" alt="${auction.title}" loading="lazy">
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
                        <span class="value current-bid">$${auction.currentBid}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Time Remaining:</span>
                        <span class="value time-remaining">${timeRemaining}</span>
                    </div>
                    <div class="detail-row">
                        <span class="label">Highest Bidder:</span>
                        <span class="value">${auction.bidder || 'No bids yet'}</span>
                    </div>
                </div>

                <details class="auction-specs">
                    <summary>🔍 Specifications</summary>
                    <ul>
                        <li><strong>Brand:</strong> ${auction.brand}</li>
                        <li><strong>Model:</strong> ${auction.model}</li>
                        <li><strong>Material:</strong> ${auction.material}</li>
                        <li><strong>Condition:</strong> ${auction.condition}</li>
                        <li><strong>Shipping:</strong> ${auction.shipping}</li>
                    </ul>
                </details>

                <button class="btn-bid-now" onclick="auctionApp.selectItemForBidding(${auction.id})">
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

        if (diff <= 0) return 'Auction ended';

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateNavigation() {
        const authNav = document.getElementById('auth-nav');
        const currentUser = Auth.getCurrentUser();

        if (currentUser) {
            authNav.innerHTML = `
                <span class="user-greeting">Welcome, ${currentUser.fullName.split(' ')[0]}!</span>
                <a href="profile.html" class="btn-profile">Profile</a>
                <a href="#" onclick="Auth.logout()" class="btn-logout">Logout</a>
            `;
        }
    }

    updateBidSection() {
        const loginPrompt = document.getElementById('bid-login-prompt');
        const bidForm = document.getElementById('bid-form-container');
        const currentUser = Auth.getCurrentUser();

        if (currentUser) {
            loginPrompt.style.display = 'none';
            bidForm.style.display = 'block';
        } else {
            loginPrompt.style.display = 'block';
            bidForm.style.display = 'none';
        }
    }

    updateBidSelectOptions() {
        const select = document.getElementById('selected-item');
        if (!select) return;

        // Clear existing options except the first one
        while (select.children.length > 1) {
            select.removeChild(select.lastChild);
        }

        this.auctions.forEach(auction => {
            const option = document.createElement('option');
            option.value = auction.id;
            option.textContent = `${auction.title} (Current: $${auction.currentBid})`;
            select.appendChild(option);
        });
    }

    selectItemForBidding(auctionId) {
        const select = document.getElementById('selected-item');
        const auction = this.auctions.find(a => a.id === auctionId);

        if (select && auction) {
            select.value = auctionId;
            this.updateMinimumBid(auction);

            // Scroll to bidding section
            document.getElementById('bidding').scrollIntoView({ behavior: 'smooth' });
        }
    }

    updateMinimumBid(auction) {
        const minimumElement = document.getElementById('bid-minimum');
        const bidInput = document.getElementById('bid-amount');

        if (auction && minimumElement && bidInput) {
            const minBid = auction.currentBid + 1;
            minimumElement.textContent = `Minimum bid: $${minBid}`;
            bidInput.min = minBid;
            bidInput.placeholder = `Minimum: $${minBid}`;
        }
    }

    loadBidHistory() {
        const container = document.getElementById('bid-history-list');
        if (!container) return;

        // Get all bids from all users (in a real app, this would come from server)
        const allBids = [];
        const users = JSON.parse(localStorage.getItem('auctionUsers')) || [];

        users.forEach(user => {
            if (user.bids) {
                user.bids.forEach(bid => {
                    allBids.push({
                        ...bid,
                        bidderName: user.fullName,
                        bidderUsername: user.username
                    });
                });
            }
        });

        // Sort by timestamp (most recent first)
        allBids.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        if (allBids.length === 0) {
            container.innerHTML = '<p class="no-bids">No bids placed yet.</p>';
            return;
        }

        container.innerHTML = '';
        allBids.slice(0, 10).forEach(bid => {
            const bidItem = document.createElement('div');
            bidItem.className = 'bid-item';

            const bidTime = new Date(bid.timestamp);
            const timeString = bidTime.toLocaleDateString() + ' ' + bidTime.toLocaleTimeString();

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
        const totalBidsElement = document.getElementById('total-bids');
        const activeAuctionsElement = document.getElementById('active-auctions');
        const totalValueElement = document.getElementById('total-value');

        // Calculate statistics
        const users = JSON.parse(localStorage.getItem('auctionUsers')) || [];
        let totalBids = 0;
        let totalValue = 0;

        users.forEach(user => {
            if (user.bids) {
                totalBids += user.bids.length;
                totalValue += user.bids.reduce((sum, bid) => sum + bid.amount, 0);
            }
        });

        const activeAuctions = this.auctions.length;

        if (totalBidsElement) totalBidsElement.textContent = totalBids;
        if (activeAuctionsElement) activeAuctionsElement.textContent = activeAuctions;
        if (totalValueElement) totalValueElement.textContent = `$${totalValue}`;
    }

    setupEventListeners() {
        // Bid form submission
        const bidForm = document.getElementById('bidForm');
        if (bidForm) {
            bidForm.addEventListener('submit', (e) => this.handleBidSubmission(e));
        }

        // Bid item selection change
        const itemSelect = document.getElementById('selected-item');
        if (itemSelect) {
            itemSelect.addEventListener('change', (e) => {
                const auctionId = parseInt(e.target.value);
                const auction = this.auctions.find(a => a.id === auctionId);
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
            alert('Please login to place a bid!');
            window.location.href = 'login.html';
            return;
        }

        const auctionId = parseInt(document.getElementById('selected-item').value);
        const bidAmount = parseFloat(document.getElementById('bid-amount').value);

        if (!auctionId || !bidAmount) {
            alert('Please select an item and enter a bid amount.');
            return;
        }

        const auction = this.auctions.find(a => a.id === auctionId);
        if (!auction) {
            alert('Selected auction not found.');
            return;
        }

        const minBid = auction.currentBid + 1;
        if (bidAmount < minBid) {
            alert(`Your bid must be at least $${minBid}.`);
            return;
        }

        // Show loading state
        const submitBtn = document.getElementById('submitBidBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';

        try {
            // Create bid object
            const bid = {
                auctionId: auctionId,
                amount: bidAmount,
                timestamp: new Date().toISOString()
            };

            // Update user bids
            const updatedUser = { ...currentUser };
            if (!updatedUser.bids) updatedUser.bids = [];
            updatedUser.bids.push(bid);

            // Save to localStorage
            const result = Auth.updateUser(updatedUser);
            if (result.success) {
                // Update auction data (in a real app, this would be server-side)
                auction.currentBid = bidAmount;
                auction.bidder = currentUser.username;

                alert(`Bid submitted successfully!\nAmount: $${bidAmount}\nAuction: ${auction.title}`);

                // Clear form
                document.getElementById('bid-amount').value = '';
                document.getElementById('selected-item').value = '';

                // Refresh data
                this.loadBidHistory();
                this.updateStatistics();
                this.renderAuctions();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('Bid submission error:', error);
            alert('Failed to submit bid. Please try again.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    }

    showLoading(show) {
        const loading = document.getElementById('loading');
        if (loading) {
            loading.style.display = show ? 'block' : 'none';
        }
    }

    showNoAuctions() {
        const noAuctions = document.getElementById('no-auctions');
        const auctionsGrid = document.getElementById('auctions-grid');

        if (auctionsGrid) auctionsGrid.style.display = 'none';
        if (noAuctions) noAuctions.style.display = 'block';
    }

    showError(message) {
        const container = document.querySelector('.main-content');
        if (container) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.innerHTML = `<p>${message}</p>`;
            container.insertBefore(errorDiv, container.firstChild);
        }
    }
}

// Initialize the app when DOM is loaded
let auctionApp;
document.addEventListener('DOMContentLoaded', function() {
    auctionApp = new AuctionApp();
});
