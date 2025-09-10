document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    // Smooth scrolling và hiệu ứng header khi cuộn trang
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(106, 17, 203, 0.9)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
        } else {
            const path = window.location.pathname;
            if (path === '/' || path.includes('index.html')) {
                header.style.backgroundColor = 'transparent';
                header.style.boxShadow = 'none';
            } else {
                header.style.backgroundColor = 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)';
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            }
        }
    });

    const links = document.querySelectorAll('.nav-links a, .logo');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.href.includes('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});