let userIdCounter = 1;

function showPage(pageId) {
    document.querySelectorAll('div[id$="-page"]').forEach(div => div.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function showHomePage() {
    showPage('home-page');
}

function showRegisterPage() {
    showPage('register-page');
}

function showLoginPage() {
    showPage('login-page');
}

function showServicesPage() {
    showPage('services-page');
}

function showBookingPage(serviceType) {
    showPage('booking-page');
    document.getElementById('service-title').innerText = `Book ${serviceType}`;
    
    const venders = {
        'AC': ['Vender A', 'Vender B', 'Vender C'],
        'House': ['Vender D', 'Vender E', 'Vender F'],
        'Vehicle': ['Vender G', 'Vender H', 'Vender I'],
        'Product': ['Vender J', 'Vender K', 'Vender L']
    };
    
    const venderSelect = document.getElementById('vender');
    venderSelect.innerHTML = '';
    venders[serviceType].forEach(vender => {
        const option = document.createElement('option');
        option.value = vender;
        option.textContent = vender;
        venderSelect.appendChild(option);
    });
    
    document.getElementById('amount').value = '100'; // Example amount
}

function register() {
    const userName = document.getElementById('username').value;
    document.getElementById('user-id').innerText = userIdCounter++;
    document.getElementById('ack-username').innerText = userName;
    showPage('registration-acknowledgment');
}

function login() {
    // For simplicity, always go to services page.
    showPage('services-page');
}

function confirmBooking() {
    document.getElementById('service-id').innerText = 'S' + Math.floor(Math.random() * 1000);
    document.getElementById('vender-name').innerText = document.getElementById('vender').value;
    showPage('booking-acknowledgment');
}
