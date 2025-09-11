document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Hiệu ứng thay đổi header khi cuộn trang
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Thêm class 'active' cho link menu hiện tại (tùy chọn)
    const currentPath = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
/*tuyết rơi*/
document.addEventListener('DOMContentLoaded', function() {
    // ... (Giữ nguyên các đoạn code JavaScript hiện có của bạn ở đây) ...

    // Thêm hiệu ứng tuyết rơi
    const snowflakeCount = 50; // Số lượng hạt tuyết
    const body = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        // Vị trí ngẫu nhiên ban đầu
        const startX = Math.random() * window.innerWidth;
        const startY = -Math.random() * window.innerHeight; // Bắt đầu từ trên cao
        snowflake.style.left = `${startX}px`;
        snowflake.style.top = `${startY}px`;

        // Kích thước ngẫu nhiên
        const size = Math.random() * 5 + 2; // Từ 2px đến 7px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Thời gian rơi ngẫu nhiên
        const animationDuration = Math.random() * 10 + 5; // Từ 5s đến 15s
        snowflake.style.animationDuration = `${animationDuration}s`;
        
        // Độ trễ animation ngẫu nhiên
        const animationDelay = Math.random() * 10; // Từ 0s đến 10s
        snowflake.style.animationDelay = `-${animationDelay}s`; // Dùng số âm để tạo hiệu ứng tuyết đã rơi được một đoạn khi bắt đầu

        // Hướng gió nhẹ (di chuyển ngang ngẫu nhiên)
        const xEnd = startX + (Math.random() - 0.5) * 200; // Di chuyển +/- 100px ngang
        snowflake.style.setProperty('--x-start', `${startX}px`);
        snowflake.style.setProperty('--x-end', `${xEnd}px`);

        body.appendChild(snowflake);
    }
});
