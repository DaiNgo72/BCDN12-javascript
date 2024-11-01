console.clear();

/**
 * Object
 */

// name
// msv
// gender
// age
//          0: name      | 1: msv  |2:gender|3:age
let sv_1 = ["Nguyen Van A", "123456", "Nam", 20];
let sv_2 = ["Nguyen Van B", "123457", "Nam", 21];

console.log(sv_1[0]);
console.log(sv_1[1]);
console.log(sv_1[2]);
console.log(sv_1[3]);

// Object = đối tượng
let sv_3 = {
    //👇 không phải khai báo biến nên không dùng let hay const 
    name: "Nguyen Van C",

    // 👇 dùng dấu : để gán giá trị
    msv: '123458',

    //          👇 dùng dấu , để kết thúc dòng
    gender: "Nu",
    age: 21,
}

console.log(sv_3.name);
console.log(sv_3.msv);
// Nếu như lấy một property không có trong object thì sẽ trả về undefined
console.log(sv_3.abc);

// --------------------------------
// inch
// ram: ít nhất 8g
// rom
// cpu
// gpu
let laptop = {
    // property -> thuộc tính
    cpu: 'AMD Ryzen 5 6600HS Creator Edition',
    ram: '16.0 GB',
    rom: '512 GB',
    gpu: 'GTX 1650',

    // key: value
    // Nếu trùng tên property thì nó sẽ lấy thằng ở dưới cùng
    inch: '15.6',
    inch: '14',
    inch: '13',
}

// Thêm thuộc tính cho laptop
laptop.pin = "5 mAH";

// Thay đổi giá trị của thuộc tính
laptop.inch = '18';

// Xóa thuộc tính
// laptop.inch = null;
laptop.inch = undefined; // ❌

// Xóa thuộc tính
delete laptop.inch; // ✅

console.log('laptop', laptop);





// age
// leg
// class -> bo xat, co vu, chim
let animal = {
    age: 22,
    leg: 2,
    class: "co vu",


    // method
    eat() {
        console.log("Ăn");
    },

    sleep() {
        console.log("Ngủ");
    }
}

function eat(){

}
eat()
animal.eat();


console.log(animal.age);

animal.eat();
animal.sleep();


// name
// age
// type
// color
let dog = {
    name: "husky",
    age: 2,
    type: "Husky",
    color: 'black'
}















//
dog.age

dog.name

let todo_1 = {
    label: 'react',
    id: 1,
    type: 'todo'
}

let todo_2 = {
    label: 'html',
    id: 2,
    type: 'todo'
}

let todo_3 = {
    label: 'git',
    id: 3,
    type: 'done'
}

let todoList = [
    todo_1,
    todo_2,
    todo_3,
    {
        label: 'css',
        id: 4,
        type: 'deleted'
    }
];

// let todos = [todo_1, todo_2];
let todos = [];

// let doneList = [todo_3]
let doneList = []

let deletedList = []

for (let i = 0; i <= todoList.length - 1; i++) {
    let todo = todoList[i];

    console.log(todo);
    
    if (todo.type == 'done') {
        doneList.push(todo);
    }

    if (todo.type == 'todo') {
        todos.push(todo);
    }

    if (todo.type == 'deleted') {
        deletedList.push(todo);
    }
}




console.log(window);
window.toan = 9999;

let sv_5 = {
    toan: 10,
    ly: 7,
    hoa: 8,

    // this => window
    anh: this.toan,

    tinhDiemTb() {
        // this => sv_5
        console.log(this.ly);
        console.log(this.hoa);
        console.log(this.toan);
        console.log(sv_5.toan);
    }
}

console.log(sv_5);
sv_5.tinhDiemTb();
