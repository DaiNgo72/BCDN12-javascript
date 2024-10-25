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

// - 1 -
// hoisting: cơ chế trong javascript
// dành cho function declaration
renderTodos();

// let content = '';

// for (let i = 0; i <= todoList.length - 1; i++) {
//     // content += '<li>' + todoList[i] + '</li>';

//     // template string
//     content += `<li>${todoList[i]} <button>x</button> </li>`;
// }

// todoEle.innerHTML = content;



// ------------------------
function handleAddTodo() {

    // 1. Lấy giá trị từ input
    let todo = document.getElementById('todo').value;

    // 2. Thêm giá trị đó vào cuối mảng
    todoList.push(todo);


    // Kiểm tra lại đã thêm vào phần tử vào mảng hay chưa
    console.log(todoList);


    // 3. Render lại mảng todo
    renderTodos();
}

function renderTodos() {
    let content = '';

    for (let i = 0; i <= todoList.length - 1; i++) {
        // onclick="handleDeleteTodo()"
        content += `<li>${todoList[i]} <button data-id="${todoList[i]}" class="x-btn" >v</button> </li>`;
    }

    todoEle.innerHTML = content;

    let listBtn = document.querySelectorAll('.x-btn');

    for (let i = 0; i < listBtn.length; i++) {
        let xBtn = listBtn[i];

        // xBtn.onclick = function () {
        //     // Lấy attr của button
        //     // truyền vào hàm handleDeleteTodo
        //     let id = xBtn.getAttribute('data-id');

        //     handleDeleteTodo(id);
        // };

        xBtn.onclick = handleDeleteTodo2
    }
}

function handleDeleteTodo2(event) {
    let id = event.target.getAttribute('data-id');
    let index = findIndex(todoList, id);
    if (index == -1) {
        return;
    }
    todoList.splice(index, 1);
    renderTodos();
}

function handleDeleteTodo(id) {
    console.log(id);
    let index = findIndex(todoList, id);
    if (index == -1) {
        return;
    }
    // Xoa
    todoList.splice(index, 1);

    // Render lại mảng todo
    renderTodos();
}

function findIndex(arr, value) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        let todo = arr[i]

        if (todo == value) {
            index = i;

            break;
        }
    }

    return index;
}



/**
 * querySelector -> 1
 * querySelectorAll -> nhiều
 */





