// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    
    // Mobile menu toggle
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            menuToggle.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when overlay is clicked
        overlay.addEventListener('click', function() {
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('active');
            body.style.overflow = '';
        });
        
        // Close menu when a link is clicked (for mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                    overlay.classList.remove('active');
                    menuToggle.classList.remove('active');
                    body.style.overflow = '';
                }
            });
        });
        
        // Close menu on window resize (if resized to desktop)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
    
    // Active link functionality
    const links = document.querySelectorAll('.nav-links a');
    
    // Set active link on click
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            // If it's an anchor link
            if (this.getAttribute('href').startsWith('#')) {
                // Remove active class from all links
                links.forEach(item => item.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Smooth scrolling for anchor links
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Set active link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active class
        links.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.startsWith('#') && href.substring(1) === current) {
                link.classList.add('active');
            }
        });
        
        // If at top of page, set home as active
        if (window.scrollY < 100) {
            links.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-links a[href="#home"]');
            if (homeLink) homeLink.classList.add('active');
        }
    });
    
    // Initialize - set home as active if at top
    if (window.scrollY < 100) {
        const homeLink = document.querySelector('.nav-links a[href="#home"]');
        if (homeLink) homeLink.classList.add('active');
    }
    
    // Button click handlers
    const buttons = document.querySelectorAll('.btn:not(.location-btn)');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.getAttribute('href') && !this.getAttribute('onclick')) {
                e.preventDefault();
                alert('This is a demo button! In a real application, this would perform an action.');
            }
        });
    });
});