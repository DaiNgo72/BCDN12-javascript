function phaCheTraSenVang() {
    let duong = 0.5;
    let nuoc = 200;
    let tra = 0.3;

    let traSenVang = duong + nuoc + tra;

    console.log("Tra Sen Vang: " + traSenVang);
    return traSenVang;
}

phaCheTraSenVang();
phaCheTraSenVang();

// Làm sao đếm được số ly mà chúng ta đã làm được

let soLyCanLam = 5;

// -> sử dụng vòng lặp.
/**
 * while (1%)
 * do while (1%)
 * 
 * for (98%)
 */

// 1. Đếm số lần lặp
let dem = 0;

// 2. Điều kiện để kết thúc vòng lặp
while (dem < soLyCanLam) {
    phaCheTraSenVang();

    // 3. Tăng biến đếm.
    dem += 1;
}

console.log("Số ly đã làm: " + dem);


// -------------------
// BT 1: Viết một chương trình JavaScript sử dụng vòng lặp while để đếm số lượng số lẻ từ 1 đến một số N mà người dùng nhập vào.

function handleDemSoLe() {
    debugger;
    let soNEle = document.getElementById("so-nguyen-duong-n");
    let soNValue = soNEle.value;
    let soN = Number(soNValue);

    // NaN: Not a Number

    // Case 1: Người dùng cố tình nhập chữ.
    // Case 2: Người dùng nhập số âm
    // Case 3: Người dùng không nhập dữ liệu
    // Case 4: Người dùng có nhập dữ liệu những là space

    // NaN == NaN ::: false
    // if (soN == NaN) { Không được
    if (isNaN(soN)) {
        alert("Không được nhập chữ !!!");

        return;
    }

    // trim: cắt khoảng trắng ở đầu và cuối
    if (soNValue.trim().length == 0) {
        alert("Không được để trống !!!");

        return;
    }

    if (soN < 1) {
        alert("Không được nhập số nhỏ hơn 1 !!!");

        return;
    }

    let soLe = 0;

    // 1. Biến đếm
    let dem = 1; // 11
    // 1 -> 10
    // 1 2 3 4 5 6 7 8 9 10


    // 2. Điều kiện để chạy vòng lặp
    while (dem <= soN) {
        console.log(dem);

        /**
         * ---------------
         * Xử lý tính toán
         * ---------------
         */

        // Chia lấy dư, nếu dư 1 thì là số lẻ
        if (dem % 2 == 1) {
            soLe += 1;
        }

        /**
        * ---------------
        * Xử lý tính toán
        * ---------------
        */

        // 3. Tăng biến đếm
        dem += 1;
    }

    console.log('🚀 >>>::::::::: Xử lý tính toán :::::::::');
    console.log('Tổng số lẻ: ' + soLe);


    // Break
    // return
}

/**
 * 
 * 👉 document.getElementById("btn-dem-so-le").onclick = handleDemSoLe
 *                                                                  ☝️ truyền hàm
 * 👉 <button onclick="handleDemSoLe()" id="bt-dem-so-le">Đếm số lẻ</button>
 *                                  ☝️ gọi hàm
 * 
 * 👉 Bí mật:
 * - Trình duyệt sẽ chuyển qua javascript như thế này.
 * - eleButton.onclick = function (){  handleDemSoLe();  }
 * 
 */



// ---------
/**
 * số nguyên tố là số chia hết cho 1 và chính nó
 * 
 * 5
 * 6: 2 3
 * 7:
 * 8:
 * 9:
 * 10:
 * 11:
 * 12:
 * 13:
 * 
 * - nếu như chia hết cho bất kỳ số nào khác thì không phải là số nguyên tố.
 * 
 * 
 * Chạy từ 2 -> chính nó - 1
 * 
 * 12
 * 
 * 2 3 4 5 6 7 8 9 10 11
 * 
 */


function handleKiemTraSoNguyenTo() {
    debugger;
    // let soNEle = document.getElementById("so-nguyen-to");
    // let soNValue = soNEle.value;
    let soN = Number(document.getElementById("so-nguyen-to").value);

    // Giả sử người dùng nhập đúng, lý tưởng

    let isSnt = true;

    // 1. Biến đếm - Bắt đầu chạy từ 2
    let dem = 2;

    // 2. Điều kiện để chạy vòng lặp
    // dem < soN
    while (dem <= soN - 1) {

        // 4. Kiểm tra số nguyên tố
        if (soN % dem == 0) {

            isSnt = false;
            // Thoát khỏi vòng lặp

            // break: dùng vòng lặp

            break;

            // ??????
            // return;
        }


        // 3.  Tăng biến đếm
        dem += 1;
    }


    if (isSnt) {
        console.log("Đây là số nguyên tố")
    } else {
        console.log("Đây không phải là số nguyên tố")
    }
}


function handleKiemTraSoNguyenTo2() {
    debugger;
    // let soNEle = document.getElementById("so-nguyen-to");
    // let soNValue = soNEle.value;
    let soN = Number(document.getElementById("so-nguyen-to").value);

    // Giả sử người dùng nhập đúng, lý tưởng

    let isSnt = true;

    // 1. Biến đếm - Bắt đầu chạy từ 2
    let dem = 2;

    do {
        // 4. Kiểm tra số nguyên tố
        if (soN % dem == 0) {
            isSnt = false;
            break;
        }
        // 3.  Tăng biến đếm
        dem += 1;
    }
    while (dem <= soN - 1)
    // 2. Điều kiện để chạy vòng lặp


    if (isSnt) {
        console.log("Đây là số nguyên tố")
    } else {
        console.log("Đây không phải là số nguyên tố")
    }
}

// ----------------
// BT 3:

function handleChiaHetCho3() {
    let soN = Number(document.getElementById('so-nguyen-duong-n-1').value);



    let soChiaHetCho3 = 0;

    // 1. Biến đếm, bắt đầu đếm
    let dem = 1;

    do {
        if (dem % 3 == 0) {
            soChiaHetCho3 += 1;
        }

        // 2. Tăng biến đếm
        dem += 1;
    } while (dem <= soN)
    // 3. Điều kiện để chạy vòng lặp





    // Log ra 3 lần
    // 5: log ra 5 lần 

    // console.log("Tổng số chia hết cho 3 là ", soChiaHetCho3);

    // soChiaHetCho3 = 5

    // 0 -> 4 == 5
    // 0 -> 5 == 6

    // (số cuối - số đầu) / khoảng cách + 1


    let demLog = 0;

    do {
        console.log("Tổng số chia hết cho 3 là ", soChiaHetCho3);

        demLog += 1;
    } while (demLog < soChiaHetCho3)
}

function handleInDiv() {
    let resultDivEle = document.getElementById('result-div');
    let content = ''

    // content += `<div class="blue">1</div>`;
    // content += `<div class="red">1</div>`;

    // console.log(content);

    // 1. Biến đếm; 2. Điều kiện để chạy vòng lặp; 3. Tăng biến đếm
    for (let count = 1; count <= 10; count += 1) {
        console.log('logic');

        if (count % 2 == 0) {
            // chẵn
            content += '<div class="red">' + count + '</div>'
        } else {
            // lẻ
            content += `<div class="blue">${count}</div>`
        }

    }

    resultDivEle.innerHTML = content

}

function handleBt6() {
    let n = Number(document.getElementById('so-nguyen-duong-n-2').value);
    let x = Number(document.getElementById('so-nguyen-duong-x-2').value);

    let tong = x;


    for (let count = 2; count <= n; count++) {
        // ^ :: Không hoạt động trong js
        // sử dụng: **
        // hoặc: Math.pow(x, count)
        tong += x ** count;
    }

    console.log(tong);
}


// 0, 1, 2

// dọc
let kq = '';

let doc = '';
for (let i = 1; i <= 5; i++) {
    let ngang = ''

    // ngang
    for (let j = 1; j <= 5; j++) {
        ngang += "*";
        /**
         * 0 0
         * 0 1
         * 0 2
         * 1 0
         * 1 1
         * 1 2
         * 2 0
         * 2 1
         * 2 2
         */
    }

    // "\n": new line - ngắt dòng giống với <br>
    doc += ngang + "\n";
}

console.log(doc);













