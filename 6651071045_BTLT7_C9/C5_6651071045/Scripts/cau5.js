// =====================================================
// CÂU 5: HIỂN THỊ HÌNH ẢNH NGẪU NHIÊN
// =====================================================

$(document).ready(function () {

    // 3 mảng lưu thông tin của 3 hình
    // Hình thứ i sẽ có đường dẫn ở duongDan[i], rộng chieuRong[i], cao chieuCao[i]
    var duongDan = [
        "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
        "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
        "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    ];
    var chieuRong = [240, 320, 500];
    var chieuCao = [160, 195, 343];

    // Khi bấm nút Show Image
    $("#jsstyle").click(function () {

        // Bước 1: chọn ngẫu nhiên một số 0, 1 hoặc 2
        // Math.random() cho số từ 0 đến nhỏ hơn 1, nhân 3 rồi làm tròn xuống
        var viTri = Math.floor(Math.random() * 3);

        // Bước 2: tạo thẻ <img> với thông tin của hình ở vị trí vừa chọn
        var hinhAnh = "<img src='" + duongDan[viTri] + "'" +
                      " width='" + chieuRong[viTri] + "'" +
                      " height='" + chieuCao[viTri] + "'" +
                      " alt='Hình ngẫu nhiên'>";

        // Bước 3: đưa hình vào khung kết quả (thay thế nội dung cũ)
        $("#ketqua").html(hinhAnh);
    });

});
