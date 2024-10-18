console.clear();

let room;

let sv1 = 'huy';
let sv2 = 'cuong';
let sv3 = 'thang';
let sv4 = 'phong';

// room = sv1 + " " + sv2 + ' ' + sv3 + ' ' + sv4;



// Array
// item
// index
room = [sv1, sv2, sv3, sv4];

console.log(room)

console.log(room.length);

// Muốn biết ai đang ngồi vị trí nào.
console.log(room[0]);
console.log(room[3]);

/**
 * 1. Khởi tạo ✅
 * 2. Lấy phần tử từ vị trí index (n) ✅
 * 3. Thêm phần tử vào mảng ✅
 * 4. Xóa phần tử khỏi mảng ✅
 * 5. Thêm phần tử vào vị trí bất kì ✅
 * 6. Kiểm tra mảng đó có bao nhiêu phần tử ✅
 * 
 * 7(**). In ra tất cả phần tử trong mảng ✅
 */

// Thêm vào cuối mảng
room.push("duc");
console.log(room);

// Thêm vào đầu mảng
room.unshift("thien");
console.log(room);

// Xóa vào cuối mảng
room.pop();
console.log(room);

// Xóa vào đầu mảng
room.shift();
console.log(room);

// Thêm vào vị trí bất kì
// room[50] = 'duc';
// console.log(room);

// Thêm vào cuối mảng nhưng không dùng push
// ???

// n = 10
// n + 1 => 11

let numbers = [1, 2, 3, 4]
// 5 -> 4
numbers[numbers.length] = 5;
// numbers[4] = 5

// BT: in ra tất cả phần tử của room
// for + array
// ???


for (let i = 0; i <= room.length - 1; i++) {
    console.log(room[i]);
}

let todoList = [
    "html",
    "css",
    "js",
    "git"
]


let todoEle = document.getElementById('todo-list');

let content = '';

for (let i = 0; i <= todoList.length - 1; i++) {
    // content += '<li>' + todoList[i] + '</li>';

    // template string
    content += `<li>${todoList[i]}</li>`;
}

todoEle.innerHTML = content;






