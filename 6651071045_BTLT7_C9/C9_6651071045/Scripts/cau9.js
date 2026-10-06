// =====================================================
// CÂU 9: FORM ĐĂNG KÝ CÓ KIỂM TRA DỮ LIỆU (VALIDATE)
// =====================================================
// Mỗi hàm kiemTra... kiểm tra 1 trường:
//   - Nếu đúng: xóa thông báo lỗi và trả về true
//   - Nếu sai : hiện thông báo lỗi, tô viền đỏ và trả về false

$(document).ready(function () {

    // ---------- 1. Kiểm tra TÊN (không được rỗng) ----------
    function kiemTraTen() {
        var ten = $.trim($("#name").val());    // $.trim() bỏ khoảng trắng 2 đầu

        if (ten == "") {
            $("#loiName").text("Vui lòng nhập tên.");
            $("#name").addClass("bad");        // thêm class bad để viền đỏ
            return false;
        }

        $("#loiName").text("");                // xóa lỗi
        $("#name").removeClass("bad");         // bỏ viền đỏ
        return true;
    }

    // ---------- 2. Kiểm tra GIỚI TÍNH (phải chọn 1 trong 2) ----------
    function kiemTraGioiTinh() {
        // :checked là các nút radio đang được chọn
        var soNutDuocChon = $("input[name='sex']:checked").length;

        if (soNutDuocChon == 0) {
            $("#loiSex").text("Vui lòng chọn giới tính.");
            return false;
        }

        $("#loiSex").text("");
        return true;
    }

    // ---------- 3. Kiểm tra EMAIL ----------
    function kiemTraEmail() {
        var email = $.trim($("#email").val());

        // Không được rỗng
        if (email == "") {
            $("#loiEmail").text("Vui lòng nhập email.");
            $("#email").addClass("bad");
            return false;
        }

        // Tách chuỗi email tại dấu @
        // Ví dụ "abc@gmail.com" -> ["abc", "gmail.com"]
        var cacPhan = email.split("@");

        // Phải có đúng 1 dấu @ nghĩa là tách ra đúng 2 phần
        if (cacPhan.length != 2) {
            $("#loiEmail").text("Email phải có đúng 1 dấu @.");
            $("#email").addClass("bad");
            return false;
        }

        var account = cacPhan[0];    // phần trước dấu @
        var domain = cacPhan[1];     // phần sau dấu @

        // Cả 2 phần đều không được rỗng
        if (account == "" || domain == "") {
            $("#loiEmail").text("Email thiếu tên account hoặc domain.");
            $("#email").addClass("bad");
            return false;
        }

        // Account có nhiều nhất 1 dấu chấm
        // Tách tại dấu chấm: có n dấu chấm thì ra n + 1 phần
        var soPhanAccount = account.split(".").length;
        if (soPhanAccount > 2) {
            $("#loiEmail").text("Tên account chỉ được có tối đa 1 dấu chấm.");
            $("#email").addClass("bad");
            return false;
        }

        // Domain phải có ít nhất 1 dấu chấm
        // indexOf trả về -1 nghĩa là không tìm thấy
        if (domain.indexOf(".") == -1) {
            $("#loiEmail").text("Domain phải có ít nhất 1 dấu chấm.");
            $("#email").addClass("bad");
            return false;
        }

        $("#loiEmail").text("");
        $("#email").removeClass("bad");
        return true;
    }

    // ---------- 4. Kiểm tra NGÀY SINH ----------
    function kiemTraNgaySinh() {
        var ngaySinh = $.trim($("#birthday").val());
        var cacPhan;    // mảng chứa [tháng, ngày, năm]

        if (ngaySinh == "") {
            $("#loiBirthday").text("Vui lòng nhập ngày sinh.");
            $("#birthday").addClass("bad");
            return false;
        }

        // Xác định dấu ngăn cách là "/" hay "-" rồi tách chuỗi
        if (ngaySinh.indexOf("/") != -1 && ngaySinh.indexOf("-") == -1) {
            cacPhan = ngaySinh.split("/");      // dạng mm/dd/yyyy
        } else if (ngaySinh.indexOf("-") != -1 && ngaySinh.indexOf("/") == -1) {
            cacPhan = ngaySinh.split("-");      // dạng mm-dd-yyyy
        } else {
            $("#loiBirthday").text("Nhập theo dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
            $("#birthday").addClass("bad");
            return false;
        }

        // Phải có đúng 3 phần: tháng, ngày, năm
        if (cacPhan.length != 3) {
            $("#loiBirthday").text("Nhập theo dạng mm/dd/yyyy hoặc mm-dd-yyyy.");
            $("#birthday").addClass("bad");
            return false;
        }

        // Cả 3 phần phải là số, và năm phải có đúng 4 chữ số
        if (isNaN(cacPhan[0]) || isNaN(cacPhan[1]) || isNaN(cacPhan[2]) || cacPhan[2].length != 4) {
            $("#loiBirthday").text("Tháng, ngày, năm phải là số (năm gồm 4 chữ số).");
            $("#birthday").addClass("bad");
            return false;
        }

        var thang = parseInt(cacPhan[0]);
        var ngay = parseInt(cacPhan[1]);
        var nam = parseInt(cacPhan[2]);

        // Tháng phải từ 1 đến 12
        if (thang < 1 || thang > 12) {
            $("#loiBirthday").text("Tháng phải từ 1 đến 12.");
            $("#birthday").addClass("bad");
            return false;
        }

        // Năm phải nhỏ hơn năm hiện tại
        var namHienTai = new Date().getFullYear();
        if (nam >= namHienTai) {
            $("#loiBirthday").text("Năm phải nhỏ hơn năm hiện tại (" + namHienTai + ").");
            $("#birthday").addClass("bad");
            return false;
        }

        // Ngày phải hợp lệ theo tháng (ví dụ tháng 2 không có ngày 31)
        // new Date(nam, thang, 0).getDate() cho biết tháng đó có tối đa bao nhiêu ngày
        var soNgayToiDa = new Date(nam, thang, 0).getDate();
        if (ngay < 1 || ngay > soNgayToiDa) {
            $("#loiBirthday").text("Tháng " + thang + " năm " + nam + " chỉ có " + soNgayToiDa + " ngày.");
            $("#birthday").addClass("bad");
            return false;
        }

        $("#loiBirthday").text("");
        $("#birthday").removeClass("bad");
        return true;
    }

    // ---------- 5. Kiểm tra ĐỊA CHỈ (không được rỗng) ----------
    function kiemTraDiaChi() {
        var diaChi = $.trim($("#street").val());

        if (diaChi == "") {
            $("#loiStreet").text("Vui lòng nhập địa chỉ.");
            $("#street").addClass("bad");
            return false;
        }

        $("#loiStreet").text("");
        $("#street").removeClass("bad");
        return true;
    }

    // ---------- 6. Kiểm tra THÀNH PHỐ (không được rỗng) ----------
    function kiemTraThanhPho() {
        var thanhPho = $.trim($("#city").val());

        if (thanhPho == "") {
            $("#loiCity").text("Vui lòng nhập thành phố.");
            $("#city").addClass("bad");
            return false;
        }

        $("#loiCity").text("");
        $("#city").removeClass("bad");
        return true;
    }

    // ---------- 7. Kiểm tra KHU VỰC (phải chọn, không để "-- Chọn --") ----------
    function kiemTraKhuVuc() {
        var khuVuc = $("#region").val();    // mục "-- Chọn --" có value rỗng

        if (khuVuc == "") {
            $("#loiRegion").text("Vui lòng chọn khu vực.");
            $("#region").addClass("bad");
            return false;
        }

        $("#loiRegion").text("");
        $("#region").removeClass("bad");
        return true;
    }

    // ---------- 8. Kiểm tra ZIP CODE (đúng 5 chữ số) ----------
    function kiemTraZip() {
        var zip = $.trim($("#zip").val());

        // /^[0-9]{5}$/ nghĩa là: bắt đầu - đúng 5 ký tự là số từ 0 đến 9 - kết thúc
        var mau = /^[0-9]{5}$/;

        if (mau.test(zip) == false) {
            $("#loiZip").text("Zip code phải gồm đúng 5 chữ số.");
            $("#zip").addClass("bad");
            return false;
        }

        $("#loiZip").text("");
        $("#zip").removeClass("bad");
        return true;
    }

    // =====================================================
    // KHI BẤM NÚT FINISH
    // =====================================================
    $("#reg").submit(function (e) {

        e.preventDefault();          // ngăn form tải lại trang
        $("#thongbao").html("");     // xóa thông báo cũ

        // Gọi từng hàm kiểm tra, lưu kết quả true/false vào biến
        // (gọi hết tất cả để mọi lỗi đều được hiện cùng lúc)
        var ketQuaTen = kiemTraTen();
        var ketQuaGioiTinh = kiemTraGioiTinh();
        var ketQuaEmail = kiemTraEmail();
        var ketQuaNgaySinh = kiemTraNgaySinh();
        var ketQuaDiaChi = kiemTraDiaChi();
        var ketQuaThanhPho = kiemTraThanhPho();
        var ketQuaKhuVuc = kiemTraKhuVuc();
        var ketQuaZip = kiemTraZip();

        // Chỉ khi cả 8 trường đều đúng thì mới báo thành công
        if (ketQuaTen && ketQuaGioiTinh && ketQuaEmail && ketQuaNgaySinh &&
            ketQuaDiaChi && ketQuaThanhPho && ketQuaKhuVuc && ketQuaZip) {
            $("#thongbao").html("<div class='msg-ok'>Đăng ký thành công!</div>");
        }
    });

    // =====================================================
    // KHI BẤM NÚT CLEAR
    // =====================================================
    $("#btnClear").click(function () {
        $("#reg")[0].reset();            // xóa toàn bộ dữ liệu đã nhập trong form
        $(".err").text("");              // xóa tất cả dòng báo lỗi
        $("input").removeClass("bad");   // bỏ viền đỏ ở các ô input
        $("select").removeClass("bad");  // bỏ viền đỏ ở dropdown
        $("#thongbao").html("");         // xóa thông báo thành công
    });

});
