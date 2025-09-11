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
    const playBtn = document.getElementById('play-music-btn');

    // Mảng chứa các đường dẫn URL trực tiếp đến file nhạc online
    const musicList = [
        'https://youtu.be/MsyiNSbeuEI',
        'https://youtu.be/stLrhYcR2VE',
        'https://youtu.be/p-R0_4bohPk'
        // Thêm các URL trực tiếp khác vào đây
    ];

    // Chọn ngẫu nhiên một bài hát từ danh sách và đặt nguồn cho audio
    const randomSong = musicList[Math.floor(Math.random() * musicList.length)];
    audio.src = randomSong;

    // Lắng nghe sự kiện nhấp chuột vào nút bấm
    playBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play().catch(e => {
                console.error("Lỗi khi phát nhạc:", e);
            });
            playBtn.textContent = 'Tắt Nhạc';
        } else {
            audio.pause();
            playBtn.textContent = 'Bật Nhạc';
        }
    });
});


