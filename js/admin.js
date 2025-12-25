// Admin Panel JavaScript - Auction Management

class AdminPanel {
    constructor() {
        this.auctions = [];
        this.init();
    }

    async init() {
        try {
            await this.loadAuctions();
            this.setupEventListeners();
            this.loadExistingAuctions();
        } catch (error) {
            console.error('Error initializing admin panel:', error);
            this.showMessage('Failed to load admin panel. Please refresh the page.', 'error');
        }
    }

    async loadAuctions() {
        const data = await API.getAuctionData();
        if (data && data.auctions) {
            this.auctions = data.auctions;
        }
    }

    setupEventListeners() {
        // Form submission
        const form = document.getElementById('auctionForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmission(e));
        }

        // Preview button
        const previewBtn = document.getElementById('previewBtn');
        if (previewBtn) {
            previewBtn.addEventListener('click', () => this.showPreview());
        }

        // Reset button
        const resetBtn = document.getElementById('resetBtn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetForm());
        }

        // Image upload preview
        const imageInput = document.getElementById('imageUpload');
        if (imageInput) {
            imageInput.addEventListener('change', (e) => this.handleImagePreview(e));
        }
    }

    validateForm() {
        const errors = {};
        let isValid = true;

        // Get form values
        const itemName = document.getElementById('itemName').value.trim();
        const description = document.getElementById('description').value.trim();
        const startingPrice = parseFloat(document.getElementById('startingPrice').value);
        const endTime = document.getElementById('endTime').value;
        const imageFile = document.getElementById('imageUpload').files[0];

        // Validate required fields
        if (!itemName) {
            errors.name = 'Item name is required';
            isValid = false;
        }

        if (!description) {
            errors.description = 'Description is required';
            isValid = false;
        }

        if (!startingPrice || startingPrice <= 0) {
            errors.price = 'Valid starting price is required';
            isValid = false;
        }

        if (!endTime) {
            errors.endTime = 'Auction end time is required';
            isValid = false;
        } else {
            const endDateTime = new Date(endTime);
            const now = new Date();
            if (endDateTime <= now) {
                errors.endTime = 'End time must be in the future';
                isValid = false;
            }
        }

        if (!imageFile) {
            errors.image = 'Item image is required';
            isValid = false;
        }

        // Show/hide errors
        this.showFieldError('nameError', errors.name);
        this.showFieldError('descriptionError', errors.description);
        this.showFieldError('priceError', errors.price);
        this.showFieldError('endTimeError', errors.endTime);
        this.showFieldError('imageError', errors.image);

        return { isValid, errors };
    }

    showFieldError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        if (errorElement) {
            if (message) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
        }
    }

    async handleFormSubmission(e) {
        e.preventDefault();

        // Validate form
        const validation = this.validateForm();
        if (!validation.isValid) {
            this.showMessage('Please fix the errors below.', 'error');
            return;
        }

        // Show loading state
        this.setSubmitButtonLoading(true);

        try {
            // Get form data
            const formData = this.getFormData();

            // Create auction item
            const newAuction = await this.createAuctionItem(formData);

            // Add to auctions array
            this.auctions.push(newAuction);

            // Save to localStorage (in a real app, this would be saved to a database)
            this.saveAuctionsToStorage();

            // Show success message
            this.showMessage('Auction item created successfully!', 'success');

            // Reset form
            this.resetForm();

            // Reload auctions list
            this.loadExistingAuctions();

        } catch (error) {
            console.error('Error creating auction:', error);
            this.showMessage('Failed to create auction. Please try again.', 'error');
        } finally {
            this.setSubmitButtonLoading(false);
        }
    }

    getFormData() {
        return {
            itemName: document.getElementById('itemName').value.trim(),
            category: document.getElementById('category').value,
            description: document.getElementById('description').value.trim(),
            startingPrice: parseFloat(document.getElementById('startingPrice').value),
            startTime: document.getElementById('startTime').value || null,
            endTime: document.getElementById('endTime').value,
            brand: document.getElementById('brand').value.trim(),
            model: document.getElementById('model').value.trim(),
            material: document.getElementById('material').value.trim(),
            condition: document.getElementById('condition').value,
            shipping: document.getElementById('shipping').value.trim(),
            imageFile: document.getElementById('imageUpload').files[0]
        };
    }

    async createAuctionItem(formData) {
        // Generate image URL (in a real app, this would upload to a server)
        const imageUrl = await this.processImage(formData.imageFile);

        // Create auction object
        const auction = {
            id: this.generateAuctionId(),
            title: formData.itemName,
            description: formData.description,
            startingPrice: formData.startingPrice,
            currentBid: formData.startingPrice,
            bidder: null,
            endTime: formData.endTime,
            image: imageUrl,
            brand: formData.brand || 'Unknown',
            model: formData.model || 'Unknown',
            material: formData.material || 'Unknown',
            condition: formData.condition,
            shipping: formData.shipping || 'Local pickup',
            category: formData.category
        };

        return auction;
    }

    async processImage(file) {
        return new Promise((resolve) => {
            // In a real app, this would upload to a server
            // For demo purposes, we'll use a placeholder or data URL
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => resolve(e.target.result);
                reader.readAsDataURL(file);
            } else {
                resolve('images/placeholder.jpg'); // fallback
            }
        });
    }

    generateAuctionId() {
        const maxId = this.auctions.length > 0 ? Math.max(...this.auctions.map(a => a.id)) : 0;
        return maxId + 1;
    }

    saveAuctionsToStorage() {
        // In a real app, this would send to server
        // For demo, we'll save to localStorage
        const data = {
            auctions: this.auctions,
            users: [], // Would load from API in real app
            categories: ['Watches', 'Jewelry', 'Art', 'Collectibles', 'Electronics']
        };

        localStorage.setItem('auctionData', JSON.stringify(data));
    }

    loadExistingAuctions() {
        const container = document.getElementById('auctions-list');
        if (!container) return;

        if (this.auctions.length === 0) {
            document.getElementById('no-auctions-admin').style.display = 'block';
            container.innerHTML = '';
            return;
        }

        document.getElementById('no-auctions-admin').style.display = 'none';
        container.innerHTML = '';

        this.auctions.forEach(auction => {
            const auctionElement = this.createAuctionAdminElement(auction);
            container.appendChild(auctionElement);
        });
    }

    createAuctionAdminElement(auction) {
        const element = document.createElement('div');
        element.className = 'auction-item-admin';

        element.innerHTML = `
            <div class="auction-image-admin">
                <img src="${auction.image}" alt="${auction.title}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="auction-info-admin">
                <h4>${auction.title}</h4>
                <p><strong>Current Bid:</strong> $${auction.currentBid}</p>
                <p><strong>Category:</strong> ${auction.category}</p>
                <p><strong>Ends:</strong> ${new Date(auction.endTime).toLocaleString()}</p>
            </div>
            <div class="auction-actions">
                <button class="btn-primary btn-small" onclick="adminPanel.editAuction(${auction.id})">Edit</button>
                <button class="btn-danger btn-small" onclick="adminPanel.deleteAuction(${auction.id})">Delete</button>
            </div>
        `;

        return element;
    }

    showPreview() {
        const validation = this.validateForm();
        if (!validation.isValid) {
            this.showMessage('Please fix validation errors before preview.', 'error');
            return;
        }

        const formData = this.getFormData();
        const modal = document.getElementById('previewModal');
        const content = document.getElementById('previewContent');

        // Create preview content
        content.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <img src="${formData.imageFile ? URL.createObjectURL(formData.imageFile) : 'images/placeholder.jpg'}"
                     alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px;">
            </div>
            <h3>${formData.itemName}</h3>
            <p><strong>Description:</strong> ${formData.description}</p>
            <p><strong>Starting Price:</strong> $${formData.startingPrice}</p>
            <p><strong>Category:</strong> ${formData.category}</p>
            <p><strong>Brand:</strong> ${formData.brand || 'Not specified'}</p>
            <p><strong>Model:</strong> ${formData.model || 'Not specified'}</p>
            <p><strong>Material:</strong> ${formData.material || 'Not specified'}</p>
            <p><strong>Condition:</strong> ${formData.condition}</p>
            <p><strong>Shipping:</strong> ${formData.shipping || 'Not specified'}</p>
            <p><strong>End Time:</strong> ${new Date(formData.endTime).toLocaleString()}</p>
        `;

        modal.style.display = 'flex';
    }

    resetForm() {
        document.getElementById('auctionForm').reset();
        // Clear all error messages
        document.querySelectorAll('.error-message').forEach(el => {
            el.style.display = 'none';
        });
        // Clear image preview if any
        const imageInput = document.getElementById('imageUpload');
        if (imageInput) {
            imageInput.value = '';
        }
    }

    handleImagePreview(e) {
        const file = e.target.files[0];
        if (file) {
            // Basic validation
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (file.size > maxSize) {
                this.showFieldError('imageError', 'Image size must be less than 5MB');
                e.target.value = '';
                return;
            }

            // Check file type
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
            if (!allowedTypes.includes(file.type)) {
                this.showFieldError('imageError', 'Please select a valid image file (JPG, PNG, GIF, WebP)');
                e.target.value = '';
                return;
            }

            this.showFieldError('imageError', ''); // Clear error
        }
    }

    setSubmitButtonLoading(loading) {
        const submitBtn = document.getElementById('submitBtn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        submitBtn.disabled = loading;
        btnText.style.display = loading ? 'none' : 'inline';
        btnLoading.style.display = loading ? 'inline' : 'none';
    }

    showMessage(message, type = 'success') {
        const container = document.getElementById('message-container');
        const messageEl = document.getElementById('message');

        messageEl.textContent = message;
        messageEl.className = `message ${type}`;
        container.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            container.style.display = 'none';
        }, 5000);
    }

    editAuction(auctionId) {
        alert(`Edit functionality for auction ${auctionId} would be implemented here.`);
    }

    deleteAuction(auctionId) {
        if (confirm('Are you sure you want to delete this auction?')) {
            this.auctions = this.auctions.filter(a => a.id !== auctionId);
            this.saveAuctionsToStorage();
            this.loadExistingAuctions();
            this.showMessage('Auction deleted successfully.', 'success');
        }
    }
}

// Global function for closing preview modal
function closePreviewModal() {
    document.getElementById('previewModal').style.display = 'none';
}

// Initialize admin panel
let adminPanel;
document.addEventListener('DOMContentLoaded', function() {
    adminPanel = new AdminPanel();
});

