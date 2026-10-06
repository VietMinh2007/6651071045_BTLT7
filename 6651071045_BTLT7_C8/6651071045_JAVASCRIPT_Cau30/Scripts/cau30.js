function insert_Row() {
    // Tìm bảng trên trang và thêm một hàng ở cuối bảng.
    var bang = document.getElementById("sampleTable");
    var soThuTuHangMoi = bang.rows.length + 1;
    var hangMoi = bang.insertRow(-1);

    // Tạo hai ô cho hàng vừa thêm.
    var oThuNhat = hangMoi.insertCell(0);
    var oThuHai = hangMoi.insertCell(1);

    // Ghi nội dung vào từng ô.
    oThuNhat.textContent = "Row" + soThuTuHangMoi + " cell1";
    oThuHai.textContent = "Row" + soThuTuHangMoi + " cell2";
}
