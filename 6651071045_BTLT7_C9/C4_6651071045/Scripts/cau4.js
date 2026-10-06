// =====================================================
// CÂU 4: XÓA MỤC ĐANG CHỌN TRONG DROPDOWN
// =====================================================

$(document).ready(function () {

    // Khi bấm nút Select and Remove
    $("#btnRemove").click(function () {

        // Bước 1: đếm số mục còn lại trong dropdown
        var soMuc = $("#colorSelect option").length;

        // Nếu không còn mục nào thì báo rồi dừng lại
        if (soMuc == 0) {
            $("#ketqua").text("Danh sách đã hết, không còn gì để xóa.");
            return;
        }

        // Bước 2: lấy tên mục đang được chọn (để thông báo)
        var tenMuc = $("#colorSelect option:selected").text();

        // Bước 3: xóa mục đang được chọn
        $("#colorSelect option:selected").remove();

        // Bước 4: đếm lại số mục và thông báo kết quả
        var soMucConLai = $("#colorSelect option").length;
        $("#ketqua").text("Đã xóa " + tenMuc + ". Còn lại " + soMucConLai + " màu.");
    });

});
