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
    "git",

    {
        a: 'git',
        b: true,
        c: 'done'
    }
];

let doneList = [];

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
        content += `<li>${todoList[i]} 
            <button data-id="${todoList[i]}" class="todo-btn" >
                <i class="fa-solid fa-check"></i>
            </button> 
        </li>`;
    }

    todoEle.innerHTML = content;

    let listBtn = document.querySelectorAll('.todo-btn');

    for (let i = 0; i < listBtn.length; i++) {
        let xBtn = listBtn[i];

        // xBtn.onclick = function () {
        //     // Lấy attr của button
        //     // truyền vào hàm handleDeleteTodo
        //     let id = xBtn.getAttribute('data-id');

        //     handleDeleteTodo(id);
        // };

        // xBtn.onclick = handleDeleteTodo2
        xBtn.onclick = handleDoneTodo
    }
}

function handleDoneTodo(event) {
    // Delete
    handleDelete(event);

    // render lại mảng todo
    renderTodos();

    // Thêm vào mảng doneList
    handleAddTodoDone(event);

    // render lại mảng done
    renderDone();
}

function handleAddTodoDone(event) {
    let id = event.currentTarget.getAttribute('data-id');

    doneList.push(id);
}

function renderDone() {
    let doneListEle = document.querySelector("#done-list");

    let content = '';

    for (let i = 0; i <= doneList.length - 1; i++) {
        // onclick="handleDeleteTodo()"
        content += `<li>${doneList[i]} 
            <button onclick="handleCompleteTodo(event)" data-id="${doneList[i]}" class="done-btn" >
                <i class="fa-solid fa-check"></i>
            </button> 

             <button onclick="handleRedoTodo(event)" data-id="${doneList[i]}" class="undo-btn" >
                <i class="fa-solid fa-rotate-left"></i>
            </button>
        </li>`;
    }

    doneListEle.innerHTML = content;


    console.log(doneList);
}

function handleDeleteTodoDone(event) {
    let id = event.currentTarget.getAttribute('data-id');
    let index = findIndex(doneList, id);

    if (index == -1) {
        return;
    }

    doneList.splice(index, 1);
}

function handleCompleteTodo(event) {
    console.log('🚀 >>>::::::::: complete :::::::::', event);
    // Xóa khỏi mảng done
    handleDeleteTodoDone(event);
    // render lại mảng done
    renderDone();
}

function handleRedoTodo(event) {
    console.log('🚀 >>>::::::::: redo :::::::::', event);

    let id = event.currentTarget.getAttribute('data-id');
    
    // xóa khỏi mảng done
    handleDeleteTodoDone(event);

    // thêm vào mảng todo
    todoList.push(id);

    renderDone();
    renderTodos();
}

function handleDelete(event) {
    /**
     * target: là phần tử được click
     * currentTarget: là phần tử được gán event click
     */

    /**
     * - khi click vào icon thì 
     * event.currentTarget ==> button
     * event.target ==> icon
     * 
     * - khi click vào button thì
     * event.currentTarget ==> button
     * event.target ==> button
     */
    let id = event.currentTarget.getAttribute('data-id');
    let index = findIndex(todoList, id);

    if (index == -1) {
        return;
    }

    todoList.splice(index, 1);
}

function handleDeleteTodo(id) {
    console.log(id);
    let index = findIndex(todoList, id);
    if (index == -1) {
        return;
    }
    // Xoa
    todoList.splice(index, 1);

    // @TODO
    // Thêm vào mảng doneList


    // Render lại mảng todo
    renderTodos();


    // @TODO
    // render lại mảng done
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





// document.querySelector("#done-list").onclick = function (event) {
//     // handleAddTodo(event)
//     // console.log(12)
// }