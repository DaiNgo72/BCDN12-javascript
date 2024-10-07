console.clear();
console.log("Hello World");

function kiemTraDoAmDat() {

    // random 0 - 100: số nguyên
    // 0 * 101 < Math.random() * 101 < 1 * 101
    // 0 < x < 101
    return Math.floor(Math.random() * 101);
}

console.log(kiemTraDoAmDat());



setInterval(
    function () {
        let doAm = kiemTraDoAmDat();

        // Nếu như độ ậm từ 40% - 60% thì không cần tưới nước

        // Dưới 40% thì cần tưới nước

        console.log('🚀 >>>::::::::: Độ Ẩm :::::::::', doAm);
        if (doAm < 40) {
            console.log("Tưới nước")
        } else if (doAm > 60) {
            console.log("Nhiều nước quá")
        } else {
            console.log("Độ ẩm phù hợp với cây")
        }


        // if (doAm < 40) {
        //     console.log("Tưới nước")
        // } else {
        //     if (doAm > 60) {
        //         console.log("Nhiều nước quá")
        //     } else {
        //         console.log("Độ ẩm phù hợp với cây")
        //     }
        // }
    }
    , 2_000000 // 2s
)

// -------------------------
/**
 * pin >= 80: Màu trắng
 * 20 <= pin < 80: Màu vàng
 * pin < 20: Màu đỏ
 */
function kiemTraPin() {
    // ??? Lạ lạ
    return Math.floor(Math.random() * 101);
}

function fn1() {
    return 10;
}

function fn2() {
    return 30;

    // Không thực thi code ở phía dưới nữa
    return 40;
    return 50;
    return 60;
}


let age = 20;

let age_2 = fn1();

console.log(age); // 20
console.log(age_2); // 10
console.log('🚀 >>>::::::::: label :::::::::',);
console.log(fn2());
console.log('🚀 >>>::::::::: label :::::::::',);

// console.log(fn); // lỗi 
// console.log(kiemTraPin); // random: 0 - 100

/**
 * return: giá trị của function
 */

/**
 * function ✅
 * - khai báo
 * - gọi function
 * - tham số, đối số
 * - return
 *   ** Khi đã return thì sẽ thoát khỏi function
 */

let pin = kiemTraPin();

if (pin >= 80) {
    console.log("Pin màu trắng")
} else {

    /**
     * nhỏ hơn 80 và lớn hơn hoặc bằng 20
     */

    /**
     * 👉 &&: Hai dấu -> &&, bắt buộc phải là hai dấu -> &&
     */
    if (20 <= pin && pin < 80) {
        console.log("Pin màu vàng")
    } else {
        console.log("Pin màu đỏ")
    }

}

let dk_1 = true;
let dk_2 = true;
let dk_3 = false;

let rs_1 = dk_1 && dk_2 && dk_3;
let rs_2 = dk_1 || dk_2 || dk_3;

false || false // false

console.log(rs_1); // false
console.log(rs_2); // true

console.log(
    (3 < 5) && (5 > 7) || (7 > 8) // true | false
    // true && false || false
    // false || false
    // false
)


console.log(
    (5 > 2) && (5 > 3) || (7 > 8) // true | false

    // true && true || false
    // true || false
    // true
)


// -----------
let mau = "xanh"; // 'vang', 'xanh', 'do'

if (mau == "do") {
    console.log("Dừng xe");
} else if (mau == "vang") {
    console.log("Đi chậm");
} else if (mau == "xanh") {
    console.log("Được phép di chuyển");
} else {
    console.log("Lỗi hệ thống đèn")
}

/**
 * Những trường hợp kiểm tra điều kiện
 * - so sánh bằng nhau hay không: -> switch case
 * - nằm trong 1 dãi giá trị: -> if else
 * 
 * 
 */

switch (mau) {
    case "do": {
        console.log("Dừng xe");

        break;
    }

    case "xanh": {
        console.log("Được phép di chuyển");

        break;
    }

    case "vang": {
        console.log("Đi chậm");

        break;
    }

    default: {
        console.log("Lỗi hệ thống đèn")
    }
}









