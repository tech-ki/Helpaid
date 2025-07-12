/* To do app
Select all lists
when click, switch to done
Add a event lister for click me
*/

const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
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