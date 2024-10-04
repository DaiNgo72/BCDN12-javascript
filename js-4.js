console.clear();
console.log("hello world");

/**
 * 1. Dark Mode:
 * - Chữ trắng
 * - Nền đen
 * 
 * 2. Light Mode:
 * - Chữ đen
 * - Nền trắng
 * 
 * 3. System Mode:
 * - Chữ màu theo hệ thống
 * - Nền màu theo hệ thống
 */

let btnDarkElm = document.getElementById("btn-dark-theme");
let btnLightElm = document.getElementById("btn-light-theme");
let btnSystemElm = document.getElementById("btn-system-theme");


// 1. Declare function
// theme: dark/light/system
function handleChangeTheme(theme) {
    // 1. Lấy thẻ body
    let bodyElm = document.body;

    // 2. Thay đổi class của thẻ body
    bodyElm.className = theme;
}

// handleChangeTheme("light");
// handleChangeTheme("dark");

// Lưu trữ lại giá trị gốc của body
let bodyOriginal = "container"
// Thay đổi theo thời gian
let bodyE = "container";
bodyE = bodyOriginal + " dark"; // container dark
bodyE = bodyOriginal + " light"; // container light

btnDarkElm.onclick = function () {
    handleChangeTheme("dark");
};
// -------------------------------------
// -------------------------------------

// Khai báo function và gán cho sự kiện click
// Sự kiện click cần gán cho nó giá trị phải là 1 function

// btnLightElm.onclick = 3 // error ❌
// btnLightElm.onclick = "fasdfasd" // error ❌

btnLightElm.onclick = function () { // ✅
    handleChangeTheme("light");
};
// -------------------------------------
// -------------------------------------
let handleSystemTheme = function () {

    // 👉 Kiểu dữ liệu boolean 
    // Giá trị: true hoặc false

    // Kiểu dữ liệu string
    // giá trị: 'fasdfasdf', 'fasdfads', 'fasdfas', '23432'

    // Kiểu dữ liệu number
    // giá trị: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

    let isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    // Cấu trúc điều kiện rẽ nhánh

    /** 
     * 
     * if(điều kiến) {
     *    nếu điều kiện đúng thì sẽ chạy trong ngoặc nhọn này
     * } else {
     *    nếu điều kiện sai thì sẽ chạy trong ngoặc nhọn này
     * }
     * 
     */

    if (isLight) {
        handleChangeTheme("light");
    } else {
        handleChangeTheme("dark");
    }
}

btnSystemElm.onclick = handleSystemTheme;

/**
 * Ô input nhập vào tuổi
 * Kiểm tra xem đủ tuổi để đi xe máy hay chưa
 * 
 * - Nếu đủ tuổi thì hiển thị: "Bạn đủ tuổi để đi xe máy"
 * - Nếu không đủ tuổi thì hiển thị: "Bạn không đủ tuổi để đi xe máy"
 */

let btnAgeEle = document.getElementById('btn-age');

btnAgeEle.onclick = function () {
    // 1. Lấy giá trị của ô input ✅
    let inputAgeEle = document.getElementById('age');
    // Lấy giá trị của ô input
    let age = inputAgeEle.value;
    // Ép kiểu string -> number
    age = Number(age);

    // 2. Kiểm tra độ tuổi nhập vào là lớn hơn 18 hay nhỏ hơn 18

    // true: đủ tuổi
    // false: không đủ tuổi
    let isEnoughAge = age >= 18; // Đủ tuổi hay không


    // 3. Hiển thị kết quả ✅
    // - Lấy element của thẻ p
    // - Thay đổi nội dung của element

    if (isEnoughAge) {
        let pAnnounceEle = document.getElementById('announce');

        pAnnounceEle.textContent = "Bạn đủ tuổi để đi xe máy";
    } else {
        let pAnnounceEle = document.getElementById('announce');

        pAnnounceEle.textContent = "Bạn không đủ tuổi để đi xe máy";
    }
}

// Kiểu dữ liệu: boolean
let isShow = true; // false

// if(__kiểu dữ liệu boolean__){
//     // giá trị là true
//     // thực thi code
// }

if (isShow) {
    console.log('show')
} else {
    console.log('hidden');
}

// Nếu không đúng
// let hidden = !isShow; // !true => false; !false => true
// if (hidden) {
//     console.log('hidden');
// }

console.log('end');

// Block
if (3 > 5) {
    console.log("1")
} else {
    console.log("2");

    if (7 > 5) {
        console.log("3");
    } else {
        console.log("4");
    }

    console.log("5");
}

console.log("6");

// = ::: phép gán
// == ::: phép so sánh
if (3 == 5) {
    console.log("1")
} else {
    console.log("2");
}

if (3 >= 5) {
    console.log("1")
} else {
    console.log("2");
}

// ==
// !=
// >, <, >=, <=

// Kiểm tra xem người dùng đã nhập vào đủ 8 ký tự cho mật khẩu hay chưa
// Nếu đủ 8 ký tự thì hiển thị: "Hợp lệ"
// Nếu chưa đủ 8 ký tự thì hiển thị: "Không hợp lệ"

let str1 = "fasdkljfasieowjfoiasjfsadlfkjaslk  "
console.log(str1.length);


let btnCheckEle = document.getElementById('btn-check-pw');
btnCheckEle.onclick = function () {
    // 1. lấy dữ liệu ô input
    let inputPwEle = document.getElementById('password');
    let inputValue = inputPwEle.value;
    // 2. Đo độ dài
    let inputLength = inputValue.length;
    // 3. Kiểm tra độ dài > 8 hay không
    let isStrong = inputLength >= 8;

    // 4. Hiển thị kết quả
    if (isStrong) {
        let pAnnounceEle = document.getElementById('announce-password')
        pAnnounceEle.textContent = "Hợp lệ";
    } else {
        let pAnnounceEle = document.getElementById('announce-password')
        pAnnounceEle.textContent = "Không hợp lệ";
    }
}



let btnCheckBtEle = document.getElementById('btn-check-bt');

btnCheckBtEle.onclick = function () {
    // 1. Lấy cả hai radio
    let radioDoneEle = document.getElementById('radio-done');
    let radioTodoEle = document.getElementById('radio-todo');
    // 2. Radio nào được chọn thì sẽ có thuộc tính checked = true

    // 3. Hiển thị kết quả
    if (radioDoneEle.checked) {
        // .... đi xem film
        console.log('đi xem film');
    }

    if (radioTodoEle.checked) {
        // .... học thêm 1h nữa

        console.log('học thêm 1h nữa');
    }
}
