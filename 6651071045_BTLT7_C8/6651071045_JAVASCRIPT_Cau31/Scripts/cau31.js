function removecolor() {
    // Lấy danh sách màu và vị trí đang được chọn.
    var danhSachMau = document.getElementById("colorSelect");
    var viTriDuocChon = danhSachMau.selectedIndex;

    // Nếu chưa chọn mục nào thì thông báo và không làm gì thêm.
    if (viTriDuocChon === -1) {
        alert("Dropdown đã hết mục!");
        return;
    }

    // Xóa màu đang được chọn khỏi danh sách.
    danhSachMau.remove(viTriDuocChon);
}

function addcolor() {
    // Đọc tên màu mới và bỏ khoảng trắng ở hai đầu.
    var oNhapMau = document.getElementById("nc");
    var tenMauMoi = oNhapMau.value.trim();

    // Không thêm lựa chọn rỗng vào danh sách.
    if (tenMauMoi === "") {
        return;
    }

    // Tạo một option mới rồi thêm vào cuối danh sách.
    var danhSachMau = document.getElementById("colorSelect");
    var luaChonMoi = document.createElement("option");
    luaChonMoi.text = tenMauMoi;
    danhSachMau.add(luaChonMoi);
}
