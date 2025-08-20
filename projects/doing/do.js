/* To do app
Select all lists
when click, switch to done
Add a event lister for click me
*/
var todos = [];
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => { //add
  const myItem = input.value;
  input.value = '';


  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');
  const listBtnD = document.createElement('button');
  const listBtnA= document.createElement('button');  
  const listBtnS= document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;

  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listItem.appendChild(listBtnD);
  listBtnD.textContent = 'Done';
  list.appendChild(listItem);

  listItem.appendChild(listBtnA);
  listBtnA.textContent = 'Area';
  list.appendChild(listItem);

  listItem.appendChild(listBtnS);
  listBtnS.textContent = 'Step';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => { //delete
    list.removeChild(listItem);
  });

  listBtnD.addEventListener('click', () => { //done
      //list.done(listItem);
      listItem.classList.toggle("mystyle");
    });

    listBtnA.addEventListener('click', () => { //done
      listItem.classList.toggle("area");
    });
  
    listBtnS.addEventListener('click', () => { //done
      listItem.classList.toggle("step");
    });


  input.focus();
});

const listItems = document.querySelectorAll("li"); //works

// Store a reference to the <h1> in a variable
const myHeading = document.querySelector("h1");
// Update the text content of the <h1>
myHeading.textContent = "All the things!";
/*
function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

 listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
}); */

//my style = done
function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("mystyle");
}

//upgrade
var todo = {
  // (A) INITIALIZE TO DO LIST
  data : [],        // todo list data array
  hAdd : null,      // html add item text field
  hTemplate : null, // html item row template
  hList : null,     // html to do list
  init : () => {
    // (A1) INIT LOCALSTORAGE
    if (localStorage.todo == undefined) { localStorage.todo = "[]"; }

    // (A2) RESTORE PREVIOUS SESSION
    todo.data = JSON.parse(localStorage.todo);

    // (A3) GET HTML ELEMENTS
    todo.hAdd = document.getElementById("todo-item");
    todo.hTemplate = document.getElementById("todo-template").content;
    todo.hList = document.getElementById("todo-list");

    // (A4) "ENABLE" ADD ITEM FORM
    document.getElementById("todo-add").onsubmit = todo.add;

    // (A5) DRAW TO DO LIST
    todo.draw();
  },

  // (B) DRAW TO DO LIST
  draw : () => {
    // (B1) RESET LIST
    todo.hList.innerHTML = "";

    // (B2) LOOP & GENERATE ROWS
    if (todo.data.length>0) { for (let id in todo.data) {
      let row = todo.hTemplate.cloneNode(true),
          edit = row.querySelector(".todo-edit"),
          item = row.querySelector(".todo-item");
      item.value = todo.data[id][0];
      item.id = "item" + id;
      edit.id = "edit" + id;
      edit.onclick = () => todo.edit(id);
      row.querySelector(".todo-done").onclick = () => todo.toggle(id);
      row.querySelector(".todo-del").onclick = () => todo.del(id);
      if (todo.data[id][1]) { row.querySelector(".todo-item").classList.add("todo-ok"); }
      todo.hList.appendChild(row);
    }}
  },

  // (C) HELPER - SAVE DATA INTO LOCAL STORAGE
  save: () => {
    localStorage.todo = JSON.stringify(todo.data);
    todo.draw();
  },

  // (D) ADD A NEW ITEM TO THE LIST
  add : () => {
    todo.data.push([todo.hAdd.value, false]);
    todo.hAdd.value = "";
    todo.save();
    return false;
  },

  // (E) TOGGLE EDIT ITEM
  edit : id => {
    // (E1) GET EDIT BUTTON + ITEM
    let edit = document.getElementById("edit" + id),
        item = document.getElementById("item" + id);

    // (E2) SET EDITABLE
    if (item.disabled) {
      item.classList.add("editing");
      item.disabled = false;
      item.select();
      edit.value = "\u270F";
    }

    // (E3) SAVE
    else {
      item.classList.remove("editing");
      item.disabled = true;
      edit.value = "\u270E";
      todo.data[id][0] = item.value;
      todo.save();
    }
  },

  // (F) UPDATE TODO ITEM DONE/NOT YET
  toggle: id => {
    todo.data[id][1] = !todo.data[id][1];
    todo.save();
  },

  // (G) DELETE ITEM
  del: id => { if (confirm("Delete task?")) {
    todo.data.splice(id, 1);
    todo.save();
  }}
};

// (H) PAGE INIT
window.addEventListener("load", todo.init);