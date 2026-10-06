// =====================================================
// CÂU 6: ĐẾM VÀ HIỂN THỊ CÁC MỤC TRONG DROPDOWN
// =====================================================

$(document).ready(function () {

    // Khi bấm nút Count and Output all items
    $("#btnCount").click(function () {

        // Bước 1: đếm số mục (thẻ option) trong dropdown
        var soMuc = $("#mySelect option").length;

        // Bước 2: lấy tên từng mục, ghép lại thành 1 chuỗi
        var danhSach = "";
        for (var i = 0; i < soMuc; i++) {
            // eq(i) lấy ra mục thứ i (bắt đầu từ 0)
            var tenMuc = $("#mySelect option").eq(i).text();
            danhSach = danhSach + tenMuc + "\n";    // \n là xuống dòng
        }

        // Bước 3: hiện cửa sổ cảnh báo
        alert("Dropdown có " + soMuc + " mục:\n" + danhSach);
    });

});
