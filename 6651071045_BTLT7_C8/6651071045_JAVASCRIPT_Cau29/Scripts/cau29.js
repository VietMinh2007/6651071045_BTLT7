function getFormvalue() {
    // Lấy form và các ô nhập họ, tên.
    var form = document.getElementById("form1");
    var ho = form.elements["fname"].value;
    var ten = form.elements["lname"].value;
    var khuVucKetQua = document.getElementById("out");

    // Xóa kết quả cũ trước khi hiển thị kết quả mới.
    khuVucKetQua.textContent = "";

    var dongHo = document.createElement("p");
    dongHo.textContent = "First name: " + ho;

    var dongTen = document.createElement("p");
    dongTen.textContent = "Last name: " + ten;

    khuVucKetQua.appendChild(dongHo);
    khuVucKetQua.appendChild(dongTen);
}
