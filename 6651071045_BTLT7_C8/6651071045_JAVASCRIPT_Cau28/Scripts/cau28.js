function js_style() {
    // Lấy các phần tử cần dùng trên trang.
    var doanVan = document.getElementById("text");
    var oNhapCoChu = document.getElementById("fs");
    var oNhapFont = document.getElementById("ff");
    var oChonMau = document.getElementById("cl");

    // Đọc giá trị người dùng đã nhập.
    var coChu = oNhapCoChu.value;
    var tenFont = oNhapFont.value;
    var mauChu = oChonMau.value;

    // Thay đổi định dạng của đoạn văn.
    doanVan.style.fontSize = coChu + "px";
    doanVan.style.fontFamily = tenFont;
    doanVan.style.color = mauChu;
}
