document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: '1',
            title: 'Cánh tay robot',
            summary: 'Cánh tay robot tự động hóa, một phần trong dây chuyền tự động hóa gắp hàng, giúp tối ưu hóa quy trình sản xuất trong các nhà máy và khu công nghiệp, nâng cao hiệu quả và giảm thiểu sai sót.',
            image: '../assets/images/project1.jpg',
            details: [
                'Công nghệ: Công nghệ chính: Cánh tay robot tự động với các bộ phận cơ khí, cảm biến và phần mềm điều khiển.',
                'Hệ thống điều khiển: Các thuật toán AI và học máy được sử dụng để tối ưu hóa quy trình gắp và di chuyển hàng hóa.',
            ],
            liveUrl: 'https://vt.tiktok.com/ZSDLNLXDG/', // Thay bằng URL demo của bạn
            sourceUrl: 'https:example.com' // Thay bằng URL mã nguồn GitHub của bạn
        },
        {
            id: '2',
            title: 'Đột phôi thủy lực',
            summary: 'Hệ thống đột phôi thủy lực giúp tạo ra các hình dạng và kích thước chính xác cho các chi tiết kim loại trong quá trình gia công, tối ưu hóa năng suất và độ chính xác trong các nhà máy chế tạo.',
            image: '../assets/images/project2.jpg',
            details: [
                'Công nghệ: Công nghệ chính: Hệ thống thủy lực điều khiển lực đột với các bộ phận cơ khí chính xác.',
                           'Hệ thống điều khiển: Điều khiển số CNC (Computer Numerical Control) để tăng độ chính xác và linh hoạt trong quá trình đột phôi.',
                'Chi Tiết Dự Án:',
                     'Thách thức chính:',
                     'Phát triển một hệ thống đột phôi thủy lực có khả năng xử lý các vật liệu kim loại cứng và dày.',
                     'Tối ưu hóa năng suất mà vẫn đảm bảo độ chính xác trong việc đột phôi cho các chi tiết phức tạp.',
                'Giải pháp:',
                     'Áp dụng công nghệ thủy lực mạnh mẽ để tạo ra lực đột lớn nhưng vẫn duy trì sự ổn định và chính xác.',
                     'Sử dụng CNC và các phần mềm điều khiển để lập trình và tối ưu hóa quy trình đột phôi, giúp giảm thiểu lỗi và tăng tốc độ sản xuất.'
            ],
            liveUrl: 'https:example.com',
            sourceUrl: 'https:example.com'
        },
        {
            id: '3',
            title: 'Vali thực hành Siemens',
            summary: 'Vali thực hành Siemens là thiết bị giáo dục chuyên dụng giúp học viên thực hành và nắm vững các kỹ năng điều khiển tự động hóa, lập trình và bảo trì hệ thống điện trong môi trường công nghiệp. Thiết bị này hỗ trợ việc học và nghiên cứu các công nghệ tiên tiến của Siemens trong tự động hóa.',
            image: '../assets/images/project3.jpg',
            details: [
                'Công nghệ:',
                    'Công nghệ chính: PLC Siemens, HMI (Human-Machine Interface), và các thiết bị điều khiển tự động.',
                    'Hệ thống điều khiển: Sử dụng phần mềm TIA Portal của Siemens để lập trình và cấu hình các hệ thống điều khiển.',
                'Chi Tiết Dự Án:',
                'Thách thức chính:',
                    'Thiết kế một hệ thống thực hành dễ sử dụng nhưng vẫn đảm bảo tính hiệu quả trong việc mô phỏng các tình huống thực tế trong công nghiệp.',
                    'Cung cấp đầy đủ các bài tập và hướng dẫn để học viên có thể làm quen và thành thạo các hệ thống tự động hóa của Siemens.',
                'Giải pháp:',
                    'Tích hợp các mô-đun PLC Siemens với các cảm biến, động cơ, và các thiết bị điện khác để tạo ra một môi trường học tập đầy đủ.',
                    'Sử dụng phần mềm TIA Portal để lập trình và cấu hình hệ thống, từ đó giúp học viên làm quen với các công cụ lập trình và giám sát của Siemens.',
                'Kết quả đạt được:',
                    'Giúp học viên nắm vững các khái niệm cơ bản và nâng cao về tự động hóa công nghiệp, từ đó chuẩn bị tốt cho công việc thực tế.',
                    'Tăng khả năng giải quyết vấn đề và sáng tạo trong các tình huống tự động hóa, cải thiện khả năng vận hành và bảo trì hệ thống tự động.',
                    'Cải thiện khả năng tiếp cận với công nghệ mới nhất của Siemens trong lĩnh vực tự động hóa công nghiệp.'
            ],
            liveUrl: 'https:example.com', // Thay bằng URL demo của bạn
            sourceUrl: 'https:example.com' // Thay bằng URL mã nguồn GitHub của bạn
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
