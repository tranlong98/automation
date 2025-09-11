document.addEventListener('DOMContentLoaded', () => {
    const createSnowflake = () => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        document.body.appendChild(snowflake);

        // Randomize size
        const size = Math.random() * 3 + 2; // Kích thước từ 2px đến 5px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;

        // Randomize starting position (x)
        const startX = Math.random() * window.innerWidth;
        snowflake.style.left = `${startX}px`;

        // Randomize animation duration and delay
        const duration = Math.random() * 8 + 5; // Thời gian rơi từ 5s đến 13s
        const delay = Math.random() * 5; // Độ trễ từ 0s đến 5s
        snowflake.style.animationDuration = `${duration}s`;
        snowflake.style.animationDelay = `${delay}s`;

        // Randomize horizontal drift (x-start and x-end for snowfall keyframe)
        const drift = Math.random() * 200 - 100; // Dịch chuyển ngang từ -100px đến 100px
        snowflake.style.setProperty('--x-start', '0px'); // Tuyết bắt đầu không dịch ngang
        snowflake.style.setProperty('--x-end', `${drift}px`); // Tuyết dịch ngang cuối đường rơi

        // Remove snowflake after animation ends to prevent DOM overload
        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
        });
    };

    // Create a continuous stream of snowflakes
    const startSnowfall = () => {
        // Create an initial burst of snowflakes
        for (let i = 0; i < 50; i++) { // Tạo 50 hạt tuyết ban đầu
            createSnowflake();
        }

        // Continuously create new snowflakes at intervals
        setInterval(createSnowflake, 500); // Tạo một hạt tuyết mới mỗi 0.5 giây
    };

    startSnowfall();
});
