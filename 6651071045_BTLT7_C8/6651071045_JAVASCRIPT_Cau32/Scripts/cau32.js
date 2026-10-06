function display_random_image() {
    // Danh sách các ảnh có thể được chọn ngẫu nhiên.
    var danhSachAnh = [
        {
            src: "https://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
            anhDuPhong: "https://picsum.photos/240/160?random=1",
            width: 240,
            height: 160
        },
        {
            src: "https://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
            anhDuPhong: "https://picsum.photos/320/195?random=2",
            width: 320,
            height: 195
        },
        {
            src: "https://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
            anhDuPhong: "https://picsum.photos/500/343?random=3",
            width: 500,
            height: 343
        }
    ];

    // Tính một vị trí ngẫu nhiên trong danh sách ảnh.
    var viTriNgauNhien = Math.floor(Math.random() * danhSachAnh.length);
    var anhDuocChon = danhSachAnh[viTriNgauNhien];

    // Tạo thẻ img và cài đặt kích thước, nội dung thay thế.
    var theAnh = document.createElement("img");
    theAnh.src = anhDuocChon.src;
    theAnh.width = anhDuocChon.width;
    theAnh.height = anhDuocChon.height;
    theAnh.alt = "Random Image";

    // Dùng ảnh dự phòng nếu ảnh ban đầu không tải được.
    theAnh.onerror = function () {
        theAnh.onerror = null;
        theAnh.src = anhDuocChon.anhDuPhong;
    };

    // Hiển thị ảnh mới trong vùng kết quả.
    var khuVucKetQua = document.getElementById("out");
    khuVucKetQua.textContent = "";
    khuVucKetQua.appendChild(theAnh);
}
