// Authentication module for Mini Auction Hub
const Auth = {
    // Initialize - load users from localStorage or create demo users
    init() {
        if (!localStorage.getItem('auctionUsers')) {
            // Load demo users from data.json
            fetch('data/data.json')
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('auctionUsers', JSON.stringify(data.users));
                })
                .catch(error => {
                    console.error('Error loading demo data:', error);
                    // Fallback demo users
                    const demoUsers = [
                        {
                            id: 1,
                            username: "demo_user",
                            password: "password123",
                            fullName: "Demo User",
                            email: "demo@example.com",
                            joinDate: new Date().toISOString(),
                            bids: [],
                            watchlist: []
                        }
                    ];
                    localStorage.setItem('auctionUsers', JSON.stringify(demoUsers));
                });
        }
    },

    // Register a new user
    register(userData) {
        try {
            const users = JSON.parse(localStorage.getItem('auctionUsers')) || [];
            const existingUser = users.find(user => user.username === userData.username || user.email === userData.email);

            if (existingUser) {
                if (existingUser.username === userData.username) {
                    return { success: false, message: 'Username already exists' };
                } else {
                    return { success: false, message: 'Email already registered' };
                }
            }

            // Create new user
            const newUser = {
                id: users.length + 1,
                username: userData.username,
                password: userData.password, // In real app, this would be hashed
                fullName: userData.fullName,
                email: userData.email,
                joinDate: userData.joinDate,
                bids: [],
                watchlist: []
            };

            users.push(newUser);
            localStorage.setItem('auctionUsers', JSON.stringify(users));

            return { success: true, user: newUser };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Registration failed. Please try again.' };
        }
    },

    // Login user
    login(username, password) {
        try {
            const users = JSON.parse(localStorage.getItem('auctionUsers')) || [];
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                return { success: true, user: user };
            } else {
                return { success: false, message: 'Invalid username or password' };
            }
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Login failed. Please try again.' };
        }
    },

    // Get current logged in user
    getCurrentUser() {
        try {
            const userData = localStorage.getItem('currentUser');
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error getting current user:', error);
            return null;
        }
    },

    // Logout user
    logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    },

    // Check if user is logged in
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },

    // Update user data
    updateUser(updatedUser) {
        try {
            const users = JSON.parse(localStorage.getItem('auctionUsers')) || [];
            const index = users.findIndex(u => u.id === updatedUser.id);

            if (index !== -1) {
                users[index] = updatedUser;
                localStorage.setItem('auctionUsers', JSON.stringify(users));
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));
                return { success: true };
            } else {
                return { success: false, message: 'User not found' };
            }
        } catch (error) {
            console.error('Update user error:', error);
            return { success: false, message: 'Update failed' };
        }
    }
};

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', function() {
    Auth.init();
});
