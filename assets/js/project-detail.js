document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: '1',
            title: 'Hệ thống Quản lý Công việc Tối ưu',
            summary: 'Ứng dụng web thông minh giúp tổ chức và quản lý các nhiệm vụ cá nhân và nhóm một cách hiệu quả, tối ưu hóa năng suất làm việc.',
            image: '../assets/images/project1.jpg',
            details: [
                '**Công nghệ:** React.js (Frontend), Node.js & Express (Backend), MongoDB (Database)',
                '**Thách thức chính:** Xây dựng giao diện người dùng trực quan, tối ưu hóa hiệu suất tải trang và xử lý dữ liệu lớn.',
                '**Giải pháp:** Áp dụng kiến trúc Microservices, sử dụng Redux để quản lý state hiệu quả, và tối ưu hóa truy vấn MongoDB.',
                '**Kết quả đạt được:** Tăng năng suất làm việc của đội nhóm lên đến 30%, giảm thiểu thời gian tìm kiếm thông tin và cải thiện khả năng cộng tác.'
            ],
            liveUrl: 'https://demo-taskmanager.netlify.app/', // Thay bằng URL demo của bạn
            sourceUrl: 'https://github.com/your-github/task-manager' // Thay bằng URL mã nguồn GitHub của bạn
        },
        {
            id: '2',
            title: 'Nền tảng Thương mại Điện tử Đa năng',
            summary: 'Xây dựng một nền tảng thương mại điện tử hoàn chỉnh với các chức năng quản lý sản phẩm, giỏ hàng, thanh toán an toàn và theo dõi đơn hàng.',
            image: '../assets/images/project2.jpg',
            details: [
                '**Công nghệ:** Vue.js (Frontend), Laravel (Backend), MySQL (Database), Stripe API (Thanh toán)',
                '**Thách thức chính:** Đảm bảo bảo mật giao dịch, tối ưu hóa trải nghiệm mua sắm trên thiết bị di động và tích hợp cổng thanh toán.',
                '**Giải pháp:** Triển khai chứng chỉ SSL, sử dụng Vuex để quản lý trạng thái giỏ hàng, và tích hợp API Stripe mạnh mẽ.',
                '**Kết quả đạt được:** Hơn 500 đơn hàng được xử lý trong quý đầu tiên, tỷ lệ chuyển đổi tăng 15% và phản hồi tích cực từ người dùng.'
            ],
            liveUrl: 'https://demo-ecommerce.netlify.app/',
            sourceUrl: 'https://github.com/your-github/ecommerce-platform'
        }
        // Thêm các dự án khác vào đây theo cấu trúc tương tự
        // Đảm bảo id là duy nhất cho mỗi dự án
    ];

    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projects.find(p => p.id === projectId);

    if (project) {
        document.title = `${project.title} - Portfolio của bạn`; // Cập nhật tiêu đề trang
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-summary').textContent = project.summary;
        
        const liveDemoLink = document.getElementById('live-demo-link');
        if (project.liveUrl && project.liveUrl !== '#') {
            liveDemoLink.href = project.liveUrl;
            liveDemoLink.style.display = 'inline-block'; // Hiển thị nút nếu có URL
        } else {
            liveDemoLink.style.display = 'none'; // Ẩn nút nếu không có URL
        }

        const sourceCodeLink = document.getElementById('source-code-link');
        if (project.sourceUrl && project.sourceUrl !== '#') {
            sourceCodeLink.href = project.sourceUrl;
            sourceCodeLink.style.display = 'inline-block'; // Hiển thị nút nếu có URL
        } else {
            sourceCodeLink.style.display = 'none'; // Ẩn nút nếu không có URL
        }

        const detailsList = document.getElementById('project-details-list');
        detailsList.innerHTML = ''; // Xóa nội dung cũ
        project.details.forEach(item => {
            const li = document.createElement('li'); // Sử dụng <li> thay vì <p> để làm danh sách
            li.innerHTML = item; // Sử dụng innerHTML để hiển thị thẻ <strong>
            detailsList.appendChild(li);
        });
    } else {
        document.getElementById('project-detail').innerHTML = '<h2>Không tìm thấy dự án này.</h2><p style="text-align:center;">Vui lòng quay lại <a href="projects.html">trang dự án</a>.</p>';
    }
});