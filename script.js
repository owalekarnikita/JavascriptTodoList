let date = new Date();
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = days[date.getDay()];
let month = months[date.getMonth()];

document.getElementById('date').innerHTML = ` ${day} <br> ${date.getDate()} ${month} ${date.getFullYear()}`;

const add = document.getElementById('add');
const sub = document.getElementById('sub');
const main = document.getElementById('main');
const list = document.getElementById('list');
const read = document.getElementById('read');
const select = document.getElementById('select');
let array = [];

//onclick function 

sub.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        array = [];
    } else {
        array = JSON.parse(todo);
    }
    array.push(add.value);
    localStorage.setItem("todo", JSON.stringify(array));
    displayTodo();
});

//display function
function displayTodo() {
    let todo = localStorage.getItem("todo");
    if (todo === null) {
        array = [];
    } else {
        array = JSON.parse(todo);
    }
    let html = "";
    array.forEach((list, ind) => {
        html += `<li id="listItem"><input type="checkbox" id="checkbtn" name="checkbox" ' class ='p-2' onclick="checkshow()"/> <span id="name" class ='p-2 text-white'>` + array[ind] + `</span>
             &nbsp; <span class='p-2 text-white'><i class="fa-solid fa-xmark " id="icon" onclick='deleteTodo(${ind})' ></i></span> </li>`;
    });
    list.innerHTML = html;

}

//delete element function
function deleteTodo(ind) {
    let todo = localStorage.getItem("todo");
    array = JSON.parse(todo);
    array.splice(ind, 1);
    localStorage.setItem("todo", JSON.stringify(array));
    displayTodo();
}

//checkbox function 
function checkshow() {
    let check = document.querySelectorAll('checkbtn');
    let name = document.querySelectorAll('name');
    for (let i = 0; i <= check.length; i++) {
        if (check.checked == true) {
            name.style.textDecoration = "line-through";
            name.style.color = 'blue';
        }
    }
}

function Unread() {

    let names = document.querySelectorAll('#name');
    names.forEach(i => {
        i.style.color = 'white';
        i.style.textDecoration = "none";
    });

}

//select all 
function selects() {
    let ele = document.getElementsByName('checkbox');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox') {
            ele[i].checked = true;

            if (ele[i].checked = true) {
                let names = document.querySelectorAll('#name');
                names.forEach(i => {
                    i.style.textDecoration = "line-through";
                    i.style.color = 'blue';
                });

            }

        }
    }
}

function deSelect() {
    let ele = document.getElementsByName('checkbox');
    for (let i = 0; i < ele.length; i++) {
        if (ele[i].type == 'checkbox') {
            ele[i].checked == false;

            if (ele[i].checked = false) {
                let names = document.querySelectorAll('#name');
                names.forEach(i => {
                    i.style.textDecoration = "none";
                    i.style.color = 'blue';
                });

            }

        }
    }
}



add.addEventListener("click", () => {
    let todo = localStorage.getItem("todo");
    array = JSON.parse(todo);
    let id = list.value;
    array[id] = add.value;
    list.style.display = "block";
    localStorage.setItem("todo", JSON.stringify(array));
    displayTodo();
});
window.onload = displayTodo();