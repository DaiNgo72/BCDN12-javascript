console.log("Xin Chào Thế Giới");
// Ctrl + /: comment dòng code, không muốn đoạn code được thực thi

// -----------------------------
/**
 * Một mảnh đất có chiều dài = 20m và chiều 
 * rộng = 5m. Hãy tính diện tích của nó.
 */

// y = x + 2; cho x = 10. tính y?

/**
 * B1: tóm tắt đề
 *  chiều dài: 20m
 *  chiều rộng: 5m
 *  yêu cầu: tính diện tính mảng đất (hình chữ nhật)
 * 
 * B2: Xử lý (logic)
 *  dai x rong =  dien tich 
 * 
 *  dien tich  = dai x rong  
 *  dien tich = 20 * 5
 * 
 * B3: Kết luận đưa ra kết quả
 * 
 */

function btTinhDienTich() {
    // Dùng từ khóa let để khai báo biến
    // B1 ✅
    let chieuDai = 20;
    let chieuRong = 5;

    // B2: ✅
    let dienTich = chieuDai * chieuRong;
    // dienTich = 20 * 5 // Làm ngầm giúp chúng ta
    // dienTich = 100 // Làm ngầm giúp chúng ta

    // B3: ✅
    console.log(dienTich);
}

btTinhDienTich();





// ---------------------------------------------
/**
 * Cho vận tốc 60(km/h) và khoảng cách (km) từ 
 * Đà Nẵng ra Huế là 90km. Hãy tính thời gian di 
 * chuyển (giờ).
 */

// v = s / t
// t = s / v

// *
// /
// +
// -

function btTinhThoiGian() {
    let vanToc = 60;
    let khoangCach = 90;

    let thoiGian = khoangCach / vanToc;

    console.log(thoiGian);
    // Khoảng thời gian chạy từ Đà Nẵng ra Huế tốn khoảng 1.5 giờ
    console.log("Khoảng thời gian chạy từ Đà Nẵng ra Huế tốn khoảng " + thoiGian + " giờ");
}

btTinhThoiGian();

// ----------------------------------

// họ: Nguyễn
// tên lốt: Văn
// tên: Nam

// họ và tên đầy đủ?
function btTimHoVaTen() {
    let ho = 'Nguyễn';
    let tenLot = "Văn";
    let ten = "Nam";

    let hoVaTen = ho + " " + tenLot + " " + ten;

    console.log(hoVaTen);
}

btTimHoVaTen();

// ------- Kiểu dữ liệu (data type) ---------
/**
 * string - chữ ::: có dấu nháy
 * number - số  ::: không có dấu nháy
 */

/**
 * Chuẩn: bắt buộc
 * - không bắt đầu bằng số
 * + Sai: 1VanToc ❌
 * + Đúng: vanToc1 ✅
 */

/**
 * Quy ước: không bắt buộc, quy ước chung cho các dev js
 * - camelCase
 */

// camelCase  ::: js
// snake_case ::: db, python, ...

// ------------------------------

// dấu nháy đơn và kép giống nhau, dùng để khai báo kiểu dữ liệu string
// kết thúc một câu lệnh có hoặc không có dấu chấm phẩy (nên có).



function tinhDoF() {
    let doC = 20;

    // const tySoChuyenDoiDoCSangDoF = 9 / 5; ❌
    const TY_SO_CHUYEN_DOI_DOC_C_SANG_DO_F = 9 / 5; // ✅

    let doF = doC * TY_SO_CHUYEN_DOI_DOC_C_SANG_DO_F + 32;

    console.log("24 độ C = " + doF + " độ F");
}

tinhDoF();

// ------------------------------
// 4 giờ là bao nhiều phút?

function btTinhPhut() {
    let soGio = 4.7;

    const SO_PHUT_MOT_GIO = 60;

    let soPhut = soGio * SO_PHUT_MOT_GIO;

    console.log("4 giờ = " + soPhut + " phút");
}

btTinhPhut();

// ------------------------------

/**
 * let vs const
 * Ý nghĩa:
 * - let: tượng trưng cho biến (biến động lên xuống) có thể thay đổi giá trị bất kỳ
 * - const: tượng trưng cho biến có giá trị hằng số không bao giờ thay đổi, bất di bất dịch.
 * 
 * Cách đặt tên:
 * - let: camelCase
 * - const: SCREAMING_SNAKE_CASING
 */

// const PI = 3.14;

let age = 20;
age = 21; // gán lại giá trị cho biến age;
age = 22; // không cần dùng từ khóa let trước biến age
age = 23; // vì chúng ta đã khai báo rồi, chừ chỉ gán lại giá trị

// 24 = age; ❌

// let age = 20;

console.log("age " + age);

/**
 * Chuẩn:
 * - biến đặt bên tay trái
 * - giá trị đặt bên tay phải
 * - = dùng để gán giá trị cho biến
 */

/**
 * Chuẩn:
 * - let: có thể gán lại giá trị cho biến
 * - const: không thể gán lại giá trị cho biến - cố tình gán lại (Uncaught TypeError: Assignment to constant variable)
 */

/**
 * Chuẩn: Browser sẽ thực thi (đọc từng chỉ thị code)
 * - từ trên xuống dưới
 * - trái sang phải cho phép gán
 */

// -------- Chức năng -----------
// function

// Khai báo chức năng
function tenChucNang() {
    // đặt code cho tính năng bên trong này
}

// Thực thi chức năng đó
tenChucNang()


// --------------------

// b1: Lấy element mà mình muốn thêm sự kiện vào

// element trên html lấy được bằng javascript
// thông qua id của element đó
let accessEle = document.getElementById('access');
let exchangeEle = document.getElementById('exchange');
let excelEle = document.getElementById('excel');

// console.log(exchangeEle);
// console.log(accessEle);

// b2: gắn sự kiện click cho element
function handleClickAccess() {
    console.log('click access');

    // Lấy thuộc tính backgroundColor style của element
    // let color = accessEle.style.backgroundColor;
    // {GET}
    let color = accessEle.getAttribute("data-color");
    console.log(color); //a4373a

    // {SET}
    // B1: lấy được element
    let boxLargeEle = document.getElementById('box-large');
    console.log(boxLargeEle);
    // B2: chỉnh sửa element

    // cập nhật background-color của boxLargeEle về giá trị của biến color 
    boxLargeEle.style.backgroundColor = color;


    // -----------------------------
    let boxNameEle = document.getElementById('box-name');
    let boxColorEle = document.getElementById('box-color');

    // console.log('boxNameEle :::', boxNameEle);

    boxNameEle.textContent = "Access";
    boxColorEle.textContent = color;
}

// phải gán function (chức năng) cho các sự kiện (click)
accessEle.onclick = handleClickAccess;
// handleClickAccess()


function handleClickExchange() {
    console.log("click exchange");
    // let color = exchangeEle.style.backgroundColor;
    let color = exchangeEle.getAttribute("data-color");
    console.log(color); //a4373a

    let boxLargeEle = document.getElementById('box-large');
    console.log(boxLargeEle);
    // B2: chỉnh sửa element

    // cập nhật background-color của boxLargeEle về giá trị của biến color 
    boxLargeEle.style.backgroundColor = color;

    // -----------------------------
    let boxNameEle = document.getElementById('box-name');
    let boxColorEle = document.getElementById('box-color');

    // console.log('boxNameEle :::', boxNameEle);

    let name = "Exchange";
    boxNameEle.textContent = name;
    boxColorEle.textContent = color;

}

exchangeEle.onclick = handleClickExchange;


function handleClickExcel() {
    console.log("click excel");
    // let color = excelEle.style.backgroundColor;
    let color = excelEle.getAttribute("data-color");

    console.log(color); //a4373a


    let boxLargeEle = document.getElementById('box-large');
    console.log(boxLargeEle);
    // B2: chỉnh sửa element

    // cập nhật background-color của boxLargeEle về giá trị của biến color 
    boxLargeEle.style.backgroundColor = color;

    // -----------------------------
    let boxNameEle = document.getElementById('box-name');
    let boxColorEle = document.getElementById('box-color');

    // console.log('boxNameEle :::', boxNameEle);

    boxNameEle.textContent = "Excel";
    boxColorEle.textContent = color;
}

excelEle.onclick = handleClickExcel;

// handleClickExcel()

// --------------------------------
// --------------------------------
// --------------------------------

/**
 * Chuẩn:
 * - Không được khai báo trùng tên biến
 * - Khi thực hiện function thì phải thực hiện cho xong rồi mới đến câu lệnh tiếp theo
 */
// let age = 20; ❌

let year_1 = 2024;

console.log(year_1); // 1. 2024

year_1 = 2020;

console.log(year_1); // 2. 2020

let year_2 = year_1;

console.log(year_2); // 2020

// Scope
// Global Scope: Có thể sử dụng ở bất cứ nơi nào
// Function scope (Local Scope): Chỉ cho phép sử dụng bên trong scope đó

let year_3 = 2026;

function abc() {
    // let year_3 = 2025;

    console.log(year_3); // 1. ??? 

    year_3 = 2027;

    console.log(year_3); // 2. ???

    year_3 = year_3 + 1;

    console.log(year_3); // 3. ???
}

abc();

abc();


console.log(year_3); // 4. ???



























