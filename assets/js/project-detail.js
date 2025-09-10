document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: '1',
            title: 'Hệ thống Quản lý Công việc',
            summary: 'Một ứng dụng web giúp quản lý các nhiệm vụ cá nhân và nhóm một cách hiệu quả.',
            image: '../assets/images/project1.jpg',
            details: [
                'Công nghệ: React.js, Node.js, MongoDB',
                'Thách thức: Xây dựng giao diện người dùng trực quan, tối ưu hóa hiệu suất.',
                'Kết quả: Tăng năng suất làm việc của đội nhóm lên 30%.'
            ],
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            id: '2',
            title: 'Trang web Thương mại Điện tử',
            summary: 'Trang web thương mại điện tử với các chức năng giỏ hàng, thanh toán và quản lý sản phẩm.',
            image: '../assets/images/project2.jpg',
            details: [
                'Công nghệ: Vue.js, Laravel, MySQL',
                'Thách thức: Tích hợp cổng thanh toán an toàn, xây dựng hệ thống quản lý đơn hàng.',
                'Kết quả: Hơn 100 đơn hàng được xử lý trong tháng đầu tiên.'
            ],
            liveUrl: '#',
            sourceUrl: '#'
        }
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-summary').textContent = project.summary;
        document.getElementById('live-demo-link').href = project.liveUrl;
        document.getElementById('source-code-link').href = project.sourceUrl;

        const detailsList = document.getElementById('project-details-list');
        detailsList.innerHTML = '';
        project.details.forEach(item => {
            const p = document.createElement('p');
            p.textContent = item;
            detailsList.appendChild(p);
        });
    } else {
        document.getElementById('project-detail').innerHTML = '<h2>Không tìm thấy dự án này.</h2><p style="text-align:center;">Vui lòng quay lại <a href="projects.html">trang dự án</a>.</p>';
    }
});