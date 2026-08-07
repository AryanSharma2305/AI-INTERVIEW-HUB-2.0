
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        // Add or remove the transparent class based on the scroll position
        if (scrollPosition > 50) { // You can adjust the value to determine when to change
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
    window.addEventListener('load', function () {
        document.getElementById('loading').style.display = 'none';
    });
// Show loading screen on page load
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.opacity = '0'; // Fade out
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide after fade out
    }, 500); // Match with CSS transition duration
});

// Show loading screen on network issues
window.addEventListener('beforeunload', function() {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.style.display = 'flex'; // Show loading screen
});