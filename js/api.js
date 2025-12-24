// Local data utility functions for Mini Auction Hub

const API = {
    // Get auction data from local JSON file
    async getAuctionData() {
        try {
            const response = await fetch('data/data.json');
            if (!response.ok) {
                throw new Error('Failed to fetch auction data');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Data Error:', error);
            return null;
        }
    },

    // Get local inspirational quotes (no external API)
    getRandomQuote() {
        const localQuotes = [
            { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
            { content: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
            { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
            { content: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
            { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
        ];
        return localQuotes[Math.floor(Math.random() * localQuotes.length)];
    },

    // Get user statistics (local calculation)
    getUserStats(user) {
        const totalBids = user.bids ? user.bids.length : 0;
        const activeBids = totalBids; // All bids are considered active in demo
        const wonAuctions = Math.floor(Math.random() * Math.min(totalBids + 1, 3)); // Mock won auctions
        const totalSpent = user.bids ? user.bids.reduce((sum, bid) => sum + bid.amount, 0) : 0;

        return {
            totalBids,
            activeBids,
            wonAuctions,
            totalSpent
        };
    }
};
