// =====================================================
// CÂU 1: ĐỔI STYLE ĐOẠN VĂN KHI BẤM NÚT SUBMIT
// =====================================================

// Đợi trang web tải xong rồi mới chạy code bên trong
$(document).ready(function () {

    // Gắn sự kiện click cho nút có id="jsstyle"
    $("#jsstyle").click(function () {

        // Bước 1: lấy giá trị người dùng đã nhập / chọn
        var coChu = $("#fs").val();      // lấy cỡ chữ từ ô số
        var fontChu = $("#ff").val();    // lấy tên font từ dropdown
        var mauChu = $("#cl").val();     // lấy màu từ ô chọn màu

        // Bước 2: đổi style cho đoạn văn có id="text"
        $("#text").css("fontSize", coChu + "px");   // đổi cỡ chữ (nhớ thêm "px")
        $("#text").css("fontFamily", fontChu);      // đổi font chữ
        $("#text").css("color", mauChu);            // đổi màu chữ
    });

});
