


function openProject(page) {
    window.location.href = page;
}

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all others
        document.querySelectorAll('.accordion-item').forEach(it => {
            it.classList.remove('active');
        });
        
        // Toggle current
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

function openProject(page) {
    window.location.href = page;
}






