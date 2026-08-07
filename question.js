function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const isVisible = content.style.display === 'block';

    // Hide all other contents
    document.querySelectorAll('.faq-content').forEach((faq) => {
        faq.style.display = 'none';
    });

    // Show the clicked one
    content.style.display = isVisible ? 'none' : 'block';
}
