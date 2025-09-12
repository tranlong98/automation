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
            sourceUrl: '' // Thay bằng URL mã nguồn GitHub của bạn
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
            liveUrl: '',
            sourceUrl: ''
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
            liveUrl: '', // Thay bằng URL demo của bạn
            sourceUrl: '' // Thay bằng URL mã nguồn GitHub của bạn
        },
        {
            id: '4',
            title: 'Chiếu sáng tự động sử dụng năng lượng mặt trời',
            summary: 'Hệ thống chiếu sáng tự động sử dụng năng lượng mặt trời giúp tiết kiệm điện năng, thân thiện với môi trường và hoạt động hiệu quả ở các khu vực công cộng, đường phố hoặc vùng nông thôn chưa có điện lưới ổn định.',
            image: '../assets/images/project4.jpg',
            details: [
                'Công nghệ: Sử dụng tấm pin năng lượng mặt trời để tích trữ điện năng vào ban ngày, cung cấp năng lượng cho đèn LED hoạt động vào ban đêm.',
                'Hệ thống điều khiển: Cảm biến ánh sáng và bộ điều khiển tự động giúp bật/tắt đèn dựa trên mức độ ánh sáng môi trường.',
            ],
            liveUrl: '', // Thay bằng URL demo của bạn
            sourceUrl: '' // Thay bằng URL mã nguồn GitHub của bạn
        },
        {
            id: '5',
            title: 'Mô hình Smart Home dùng ESP32 và RFID',
            summary: 'Hệ thống nhà thông minh sử dụng ESP32 để điều khiển bật/tắt thiết bị từ xa qua mạng Wi-Fi, kết hợp với Arduino và module RFID để mở cửa bằng thẻ từ. Dự án giúp nâng cao tính tự động hóa và bảo mật cho ngôi nhà.',
            image: '../assets/images/project5.jpg',
            details: [
                'Công nghệ: ESP32 được dùng để kết nối Wi-Fi, điều khiển các thiết bị như đèn, quạt thông qua ứng dụng hoặc giao diện web. Arduino UNO kết hợp với module RFID RC522 để xác thực thẻ từ và điều khiển cơ cấu mở cửa.',
                'Hệ thống điều khiển: Giao tiếp giữa các vi điều khiển qua UART hoặc MQTT. ESP32 nhận lệnh từ người dùng và phản hồi trạng thái thiết bị. Arduino xử lý dữ liệu RFID và gửi tín hiệu mở cửa khi thẻ hợp lệ.',
            ],
            liveUrl: 'https://www.tiktok.com/@tranlong4.029/video/7402913924141567239?is_from_webapp=1&sender_device=pc&web_id=7549060459430069768', // Thay bằng URL demo của bạn
            sourceUrl: '' // Thay bằng URL mã nguồn GitHub của bạn
        },
        {
            id: '6',
            title: 'Điều khiển động cơ DC Encoder',
            summary: 'Hệ thống điều khiển động cơ DC có encoder, cho phép đọc tốc độ thực tế của động cơ và điều chỉnh tốc độ bằng tín hiệu PWM. Ứng dụng trong các hệ thống cần kiểm soát tốc độ chính xác như băng chuyền, robot di chuyển, v.v.',
            image: '../assets/images/6.jpg',
            details: [
                'Công nghệ: Sử dụng động cơ DC tích hợp encoder để phản hồi tốc độ. Vi điều khiển (như Arduino hoặc ESP32) tạo xung PWM để điều khiển tốc độ động cơ.',
                'Hệ thống điều khiển: Ứng dụng thuật toán PID để duy trì tốc độ ổn định. Encoder cung cấp xung phản hồi, từ đó tính toán và hiệu chỉnh sai lệch giữa tốc độ thực tế và tốc độ đặt.',
            ],
            liveUrl: '', // Thay bằng URL demo của bạn
            sourceUrl: '' // Thay bằng URL mã nguồn GitHub của bạn
        },
        {
            id: '7',
            title: 'Mô hình ấp trứng sử dụng Arduino',
            summary: 'Mô hình ấp trứng tự động sử dụng Arduino để giám sát và điều khiển nhiệt độ, độ ẩm, và cơ chế đảo trứng nhằm tạo môi trường tối ưu cho quá trình ấp trứng. Giúp tăng tỷ lệ nở và giảm công sức theo dõi thủ công.',
            image: '../assets/images/project7.jpg',
            details: [
                'Công nghệ: Sử dụng Arduino Uno kết hợp với cảm biến nhiệt độ và độ ẩm (DHT11/DHT22), relay điều khiển đèn sưởi và quạt, cùng với mô-tơ đảo trứng định kỳ.',
                'Hệ thống điều khiển: Arduino đọc dữ liệu cảm biến liên tục và điều chỉnh các thiết bị theo ngưỡng cài đặt. Đảo trứng được thực hiện tự động theo chu kỳ nhằm mô phỏng điều kiện ấp tự nhiên.',
            ],
            liveUrl: '', // Thay bằng URL demo của bạn
            sourceUrl: '' // Thay bằng URL mã nguồn GitHub của bạn
        },
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
