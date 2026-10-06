// =====================================================
// CÂU 8: MÁY TÍNH HAI SỐ (+ - x / ^)
// =====================================================

$(document).ready(function () {

    // Hai biến dùng chung cho tất cả các nút
    var so1 = 0;
    var so2 = 0;

    // ---------- Hàm lấy 2 số từ ô nhập ----------
    // Trả về true nếu hợp lệ, false nếu có lỗi
    function layHaiSo() {
        var chuoi1 = $("#a").val();    // lấy chuỗi ở ô thứ nhất
        var chuoi2 = $("#b").val();    // lấy chuỗi ở ô thứ hai

        // Kiểm tra rỗng hoặc không phải là số (isNaN = is Not a Number)
        if (chuoi1 == "" || chuoi2 == "" || isNaN(chuoi1) || isNaN(chuoi2)) {
            $("#res").val("");
            $("#ketqua").text("Hai ô phải nhập số hợp lệ.");
            return false;
        }

        // Đổi chuỗi thành số để tính toán
        so1 = parseFloat(chuoi1);
        so2 = parseFloat(chuoi2);
        return true;
    }

    // ---------- Hàm hiển thị kết quả ----------
    function hienKetQua(phepToan, ketQua) {
        $("#res").val(ketQua);
        $("#ketqua").text(so1 + " " + phepToan + " " + so2 + " = " + ketQua);
    }

    // ---------- Nút cộng ----------
    $("#btnCong").click(function () {
        if (layHaiSo() == true) {
            hienKetQua("+", so1 + so2);
        }
    });

    // ---------- Nút trừ ----------
    $("#btnTru").click(function () {
        if (layHaiSo() == true) {
            hienKetQua("-", so1 - so2);
        }
    });

    // ---------- Nút nhân ----------
    $("#btnNhan").click(function () {
        if (layHaiSo() == true) {
            hienKetQua("x", so1 * so2);
        }
    });

    // ---------- Nút chia ----------
    $("#btnChia").click(function () {
        if (layHaiSo() == true) {
            // Không được chia cho 0
            if (so2 == 0) {
                $("#res").val("");
                $("#ketqua").text("Không thể chia cho 0.");
            } else {
                hienKetQua("/", so1 / so2);
            }
        }
    });

    // ---------- Nút lũy thừa (so1 mũ so2) ----------
    $("#btnMu").click(function () {
        if (layHaiSo() == true) {
            hienKetQua("^", Math.pow(so1, so2));
        }
    });

});
