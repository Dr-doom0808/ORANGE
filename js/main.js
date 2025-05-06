document.addEventListener('DOMContentLoaded', async () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Load header and footer
    const header = await loadHeader();
    const footer = await loadFooter();
    
    document.getElementById('header').innerHTML = header;
    document.getElementById('footer').innerHTML = footer;

    // Handle initial route
    router.handleRoute();
});