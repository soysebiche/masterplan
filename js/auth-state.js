import { auth, onAuthStateChanged, signOut } from './firebase-config.js';

// Global Auth State Observer
onAuthStateChanged(auth, (user) => {
    const currentPath = window.location.pathname;
    const isPublicPage = currentPath.endsWith('index.html') || currentPath.endsWith('login.html') || currentPath.endsWith('signupmodal.html') || currentPath === '/' || currentPath.endsWith('pricing.html');
    const isRestrictedPage = currentPath.endsWith('dashboard.html') || currentPath.endsWith('simulator.html') || currentPath.endsWith('success.html');

    if (user) {
        // User is signed in
        console.log('User is signed in:', user.email);

        // Update localStorage for legacy support (optional, but good for sync)
        const userData = {
            name: user.displayName || user.email.split('@')[0],
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('masterplan_user', JSON.stringify(userData));

        // Update UI
        updateUserUI(user);

        // Redirect if on login/signup pages
        if (currentPath.endsWith('login.html') || currentPath.endsWith('signupmodal.html')) {
            window.location.href = 'dashboard.html';
        }

    } else {
        // User is signed out
        console.log('User is signed out');
        localStorage.removeItem('masterplan_user');

        // Update UI
        updateGuestUI();

        // Redirect if on restricted pages
        if (isRestrictedPage) {
            // Allow simulator for guests? Requirement said "Hide Dashboard/Simulator tabs for unauthenticated users"
            // But usually simulator might be public? The previous task hid the TABS.
            // If the PAGE itself is restricted, then redirect.
            // Based on "Hide Dashboard/Simulator tabs", it implies these pages might be accessible but with limited view?
            // OR they are fully restricted.
            // Let's assume strict restriction for Dashboard.
            // Simulator might be open?
            // Re-reading: "Hide Dashboard/Simulator tabs for unauthenticated users".
            // If I go to /dashboard.html directly, I should probably be redirected.

            if (currentPath.endsWith('dashboard.html')) {
                window.location.href = 'login.html';
            }
            // For simulator, maybe we let them see it but with the auth overlay?
            // The auth overlay logic is already in simulator.html.
            // So we don't force redirect for simulator here, just dashboard.
        }
    }
});

function updateUserUI(user) {
    // Update Nav Bar User Section
    const userProfileSection = document.getElementById('user-profile-section') || document.querySelector('.flex.items-center.space-x-3'); // Fallback selector

    if (userProfileSection) {
        const firstLetter = user.displayName ? user.displayName.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : 'U');
        const displayName = user.displayName || user.email.split('@')[0];

        userProfileSection.innerHTML = `
            <div class="relative group cursor-pointer">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        ${firstLetter}
                    </div>
                    <span class="font-semibold text-gray-900">${displayName}</span>
                </div>
                <!-- Dropdown Menu -->
                <div class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 hidden group-hover:block border border-gray-100">
                    <a href="#" id="logout-btn" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors">
                        Sign Out
                    </a>
                </div>
            </div>
        `;

        // Attach Logout Listener
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                try {
                    await signOut(auth);
                    window.location.href = 'index.html';
                } catch (error) {
                    console.error('Error signing out:', error);
                }
            });
        }
    }

    // Show restricted nav links
    const dashboardLink = document.getElementById('nav-dashboard');
    const simulatorLink = document.getElementById('nav-simulator');
    if (dashboardLink) dashboardLink.style.display = 'inline-block'; // Or whatever the original display was (usually block or flex item)
    if (simulatorLink) simulatorLink.style.display = 'inline-block';
}

function updateGuestUI() {
    // Update Nav Bar to Guest
    const userProfileSection = document.getElementById('user-profile-section') || document.querySelector('.flex.items-center.space-x-3');

    if (userProfileSection) {
        userProfileSection.innerHTML = `
            <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                G
            </div>
            <span class="font-medium text-gray-700">Guest</span>
        `;
    }

    // Hide restricted nav links
    const dashboardLink = document.getElementById('nav-dashboard');
    const simulatorLink = document.getElementById('nav-simulator');
    if (dashboardLink) dashboardLink.style.display = 'none';
    if (simulatorLink) simulatorLink.style.display = 'none';
}
