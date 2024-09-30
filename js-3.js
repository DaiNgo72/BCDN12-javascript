console.clear();

// B1: lấy element
let imgEle = document.getElementById('random-2');

console.log(imgEle);

// Thay đổi attribute src của element
// imgEle.src = "https://picsum.photos/id/2/600/300"

// yêu cầu: thay đổi hình nền mỗi 10s

// Hàm setInterval chạy mỗi bao nhiêu dây đó
// setInterval(function, time)

// 0 * 200 < Math.random() * 200 < 1 * 200
// Kết quả random ra lớn nhất là 199: < 200
// 0 < Math.random() < 200 
// 0 < 0.00391391 < 200
// 0 < 199.4328472384 < 200

// 1 <= ___ <= 200

setInterval(

    function () {
        let random = Math.random() * 200;

        /**
         * 3.5 -> 3
         * 3.2 -> 3
         * 3.9 -> 3
         */
        // console.log('floor', Math.floor(random));
        /**
         * 3.2 => 4
         * 3.1 => 4
         * 3.9 => 4
         */
        // console.log('ceil', Math.ceil(random));

        /**
         * 3.2 => 3
         * 3.1 => 3
         * 3.9 => 4
         * 3.5 => 4
         */
        // console.log('round', Math.round(random));

        // Gán giá trị mới cho biến random
        random = Math.ceil(random);


        // "https://picsum.photos/id/" + 1 + "/600/300"

        let src = "https://picsum.photos/id/" + random + "/600/300";

        imgEle.src = src;
    }
    , 10_000 // ms
    // 1s = 1000ms

)

// BT: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10

// B1: lấy element
let imgEle3 = document.getElementById('random-3');
imgEle3.src = "https://picsum.photos/id/1/600/300"

// Tạo biến id ở phạm vi global
let id = 1;

// B2:
setInterval(
    function () {
        id = id + 1;

        let src = "https://picsum.photos/id/" + id + "/600/300";

        imgEle3.src = src;
    }
    , 10_000
)
// ------ BT Count -------
// B1: lấy element
let countEle = document.getElementById('counter');
console.log(countEle);

// B2: thay đổi nội dung của element
countEle.textContent = 2;

// Gán sự kiện click cho button "+1"
// console.log('click');

// B1: lấy button "+1"
let btn1Ele = document.getElementById('btn-1');

// Đặt biến đếm ở phạm vi global để lưu trữ giá trị đếm
// Không bị tạo mới hay reset về giá trị ban đầu mỗi khi click
// Hay là ghi nhớ được giá trị đã tăng trước đó.
let counter = 0;

function handleClick() {
    // 1. Tăng biến đếm
    // counter = counter + 1;
    /** 
     * counter = counter * 1; => counter *= 1;
     * counter = counter * 2; => counter *= 2;
     * 
     * counter = counter / 3; => counter /= 3;
     */
    // counter += 1;

    // 2. Thay đổi giao diện đếm
    // countEle.textContent = counter;


    handleIncrement(1);

}

btn1Ele.onclick = handleClick;

// btn1Ele.onclick = function () {
//     console.log("click");
// }
/**
 * 👉 Nhận xét:
 * Biến Global: Tồn tại xuyên suốt quá trình chạy chương trình.
 * Biến Local: Tạo mới mỗi khi hàm được gọi lại.
 */

let btnResetEle = document.getElementById('btn-reset');

function handleReset() {
    counter = 0;

    countEle.textContent = counter;
}

btnResetEle.onclick = handleReset;

// ------------------------------
let btn5Ele = document.getElementById('btn-5');

function handleInc5() {
    // counter = counter + 5;
    // counter += 5;

    // countEle.textContent = counter;

    handleIncrement(5);
}

btn5Ele.onclick = handleInc5;
// ------------------------------
let btn10Ele = document.getElementById('btn-10');

function handleInc10() {
    // counter = counter + 10;
    // counter += 10;

    // countEle.textContent = counter;

    handleIncrement(10);
}

btn10Ele.onclick = handleInc10;


// Tham số: parameter
// inc: tham số
function handleIncrement(inc) {
    console.log(inc);

    counter += inc;

    countEle.textContent = counter;
}


// Đối số: argument
// 10: đối số
// handleIncrement(10);

// handleIncrement(7);

let btnEnterEle = document.getElementById('btn-enter');

function handleEnter() {
    // 1. Lấy giá trị từ ô input
    // num
    let inputEle = document.getElementById('enter-id');
    // input, textarea, select: .value để lấy giá trị
    let num = inputEle.value; // String

    console.log('trước khi ép kiểu num có kiểu ::: ', typeof num);

    // ép kiểu dữ liệu
    num = Number(num);
    console.log('sau khi ép kiểu num có kiểu ::: ', typeof num);

    // 2. Thay đổi nội dung của element
    handleIncrement(num);
}

btnEnterEle.onclick = handleEnter;

/**
 * 👉 Kết luận:
 * - Mọi giá trị lấy được từ HTML đều là kiểu String
 */

// Lưu giữ giá trị font-size của element hiện tại
let currentFontSize = 16;

let loremEle = document.getElementById('lorem-1');
let btnIncFzEle = document.getElementById('inc-fz');
let btnDecFzEle = document.getElementById('dec-fz');

function handleIncFz() {

    // 1. Tăng font-size
    currentFontSize += 2;

    // 2. Thay đổi giá trị font-size của element
    loremEle.style.fontSize = currentFontSize + 'px'; // "16px"

}

function handleDecFz() {
    currentFontSize -= 2;
    loremEle.style.fontSize = currentFontSize + 'px';
}

btnIncFzEle.onclick = handleIncFz;
btnDecFzEle.onclick = handleDecFz;







