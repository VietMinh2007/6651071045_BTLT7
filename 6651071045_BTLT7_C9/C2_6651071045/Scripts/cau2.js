// =====================================================
// CÂU 2: LẤY HỌ VÀ TÊN TỪ FORM
// =====================================================

$(document).ready(function () {

    // Gắn sự kiện submit cho form có id="form1"
    $("#form1").submit(function (e) {

        // Form mặc định sẽ tải lại trang khi submit
        // Dòng này dùng để ngăn việc đó
        e.preventDefault();

        // Lấy giá trị của 2 ô input
        var ho = $("#fname").val();     // ô First name
        var ten = $("#lname").val();    // ô Last name

        // Ghép 2 giá trị lại, ở giữa có 1 dấu cách
        var hoVaTen = ho + " " + ten;

        // Hiển thị kết quả vào khung có id="ketqua"
        $("#ketqua").text("Họ và tên: " + hoVaTen);
    });

});
