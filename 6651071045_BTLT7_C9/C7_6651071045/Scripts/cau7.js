// =====================================================
// CÂU 7: HỎI XÁC NHẬN RỒI MỚI CHUYỂN ĐẾN LINK
// =====================================================

$(document).ready(function () {

    // Khi bấm nút Submit của form có id="linkForm"
    $("#linkForm").submit(function (e) {

        // Ngăn form tải lại trang
        e.preventDefault();

        // Bước 1: lấy đường link người dùng nhập
        var link = $("#linkInput").val();

        // Bước 2: nếu chưa nhập gì thì báo và dừng lại
        if (link == "") {
            $("#ketqua").text("Vui lòng nhập đường link.");
            return;
        }

        // Bước 3: nếu link chưa bắt đầu bằng http thì tự thêm https:// vào đầu
        if (link.indexOf("http") != 0) {
            link = "https://" + link;
        }

        // Bước 4: hiện hộp thoại hỏi người dùng
        // confirm() trả về true nếu bấm OK, false nếu bấm Cancel
        var dongY = confirm("Bạn có muốn chuyển đến " + link + " không?");

        // Bước 5: nếu bấm OK thì chuyển trang, bấm Cancel thì không làm gì
        if (dongY == true) {
            window.location.href = link;
        }
    });

});
