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
/*music*/

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');

    // Mảng chứa các đường dẫn URL trực tiếp đến file nhạc online
    const musicList = [
        'https://youtu.be/p-R0_4bohPk',
        'https://youtu.be/stLrhYcR2VE',
        'https://youtu.be/MsyiNSbeuEI'
        // Thêm các URL trực tiếp khác vào đây
    ];

    // Chọn ngẫu nhiên một bài hát từ danh sách
    const randomSong = musicList[Math.floor(Math.random() * musicList.length)];
    audio.src = randomSong;

    // Tự động phát nhạc sau khi người dùng tương tác với trang
    document.body.addEventListener('click', function() {
        audio.play().catch(e => {
            console.error("Autoplay was prevented:", e);
        });
    }, { once: true });
});












