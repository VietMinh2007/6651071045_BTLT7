// =====================================================
// CÂU 3: THÊM MỘT HÀNG VÀO BẢNG
// =====================================================

$(document).ready(function () {

    // Khi bấm nút Insert row
    $("#btnInsert").click(function () {

        // Bước 1: đếm bảng đang có bao nhiêu hàng
        var soHangHienTai = $("#sampleTable tr").length;

        // Bước 2: số thứ tự của hàng mới = số hàng hiện tại + 1
        var soThuTu = soHangHienTai + 1;

        // Bước 3: tạo nội dung HTML cho hàng mới
        var hangMoi = "";
        hangMoi = hangMoi + "<tr class='hang-moi'>";
        hangMoi = hangMoi + "<td>Row" + soThuTu + " cell1</td>";
        hangMoi = hangMoi + "<td>Row" + soThuTu + " cell2</td>";
        hangMoi = hangMoi + "</tr>";

        // Bước 4: thêm hàng mới vào cuối bảng
        $("#sampleTable").append(hangMoi);
    });

});
