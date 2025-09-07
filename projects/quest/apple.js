//test 2

let m = "";
let o = "";
  const dataArray = [
        { id: 0, class: "done2", exp: 20 ,name: "Create a To Do", description: ["Make this Quest , To Do app work!"
          ,"<h2 class='done2'>Steps</h2><ol><li class='step done'>Create 2 panels </li><li class='step done'>Generate list from array </li><li class='step done'>Add class icons </li><li class='step done2 done'>On click show details loop </li></li><li class='step'>Add class icons </li><li class='step '>Add class icons </li><li class='step '>Add class icons </li></ol><h2 class='open'>Stones </h2><ul><li class='step done'>Add steps </li><li class='step later'>Make Change class buttons work with js </li><li class='step later'>Create new quest button </li><li class='step later'>Sort and filter quests button </li></ul><h2 class='done2'>Rewards </h2><p>+50 experience"] },
        { id: 1,  class: "done", exp: 20 , name: "Item A", description: "Description for Item A" },
        { id: 2,  class: "open", name: "Item B", description: "Description for Item B" },
        { id: 3,  class: "next", name: "Item C", description: "Description for Item C" },
        { id: 4,  class: "open", name: "Item D", description: "Description for Item C" },
        { id: 5, class: "open", name: "Roger's Apple", description:[
      "Hey there, Name, I am Roger who teaches new Maplers lots of information.", 
      "<br><br> I know you are busy! Please spare me some time. I can teach you useful information! Hahaha!", 
      "<br><br> So ... Let's do this for fun! Abacadabra!",
      "<br><br> Surprised?! If your <b>HP</b> reahes 0, then you are in trouble. Now I will give you Roger's Apple. Please take it. Open the item window and press 'I' to consume.",
      "<br><br> Please talk to me again after your HP is 100%.",
      "<br><br> End"]},
        { id: 6,  class: "open", name: "Learning Javascript", description: "Description for Item C" },
        { id: 7,  class: "next", name: "Get Element Id", description: "<h3>Javascript </h3> Describe when to use Get Element By Id. <ul>When will class be better?</ul>"},
        { id: 8,  class: "later", name: "Dentist Appointment", description: "Description for Item C" }
        ,
        { id: 9,  class: "open", name: "Item 9", description: "Description for Item C" }
        ,
        { id: 10,  class: "open", name: "Book Template", project: ["Item 10","apple"],description: "Today, there is a growing expectation for student research. Students like you are often trained and required, as part of the university curricula, to conduct research and write papers or theses that meet the professional standards of the discipline. A good reason behind this trend is that research skills are increasingly expected in the workplace worldwide. Doing empirical research enables you to acquire many valuable skills.<br><br> It requires you to raise appropriate questions; assess existing information; set goals and make plans to meet the goals; collect, analyze, and interpret data; and use data in a meaningful and appropriate way. The process requires systematic project management skills to allocate time, resources, and handle unexpected problems. <br><br> Your research experiences will provide you with rich, in-depth learning, which many of your future employers will highly value. With advances in technology you have greater access to the tools of field research and to a broader population whom you can engage in your research. The continuing efforts of colleges and universities to establish networks with professional and local communities are increasing opportunities for your learning experiences in the real world." },
    ];

    const container = document.getElementById('log');
    const displayArea = document.getElementById('displayArea');
    //document.getElementById("displayArea").innerHTML = "hello";


    //working quests list
    for (let i in dataArray) {
      let g = i;
    o += "<h3 data-id="+g+" class='"+dataArray[i].class+"'>" + dataArray[i].name+"</h3>";
}



//show all dataArray , quest names
//document.getElementById("containera").innerHTML = o;

    container.addEventListener('click', function(event) {
        // Check if the clicked element is one of your buttons
        if (event.target.tagName === 'H3') {

            const itemId = parseInt(event.target.dataset.id); 
          
            // Get the ID from the data attribute
            const selectedObject = dataArray.find(item => item.id === itemId); 
          
            // Find the object
            if (selectedObject) {
          
              // Display the object's properties in the displayArea
              // working details list
                 document.getElementById("details").innerHTML  = "<h3>Experience<div class='container'> <span class='lvl'>Level: 2<div class='skills exp'>"+selectedObject.exp+"%</div></div>"+"<h2 class='"+selectedObject.class+"'>"+selectedObject.name+"</h2>"+"<p>"+selectedObject.description+"</p><button class='done'>done</button><button class='next'>next</button><button class='later'>later</button><button class='open'>open</button>";
exp.style.width = width + "%";width+50;
            }
            
            //console.log(selectedObject);
        }
    });

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const quest = ["One", "Two", "Three", "Four"];

let x = "";
let a = "";
let b = "";
const myObj = {
  name: "John",
  age: 30,
  aquests: [ //avaliable
    {name:"Avaliable Quests", models:[
      "Select your quest", 
      "Select your status", 
      "Complete your quest."]},
    {name:"Roger's Apple", models:[
      "Hey there, Name, I am Roger who teaches new Maplers lots of information.", 
      "I know you are busy! Please spare me some time. I can teach you useful information! Hahaha!", 
      "So ... Let's do this for fun! Abacadabra!",
      "Surprised?! If youy HP reahes 0, then you are in trouble. Now I will give you Roger's Apple. Please take it. Open the item window and press 'I' to consume.",
      "Please talk to me again after your HP is 100%.",
      "End"]},
    {name:"BMW", models:[
      "320", 
      "X3", 
      "X5"]},
    {name:"Fiat", models:[
      "500", 
      "Panda"]}
      ,
    {name:"Fiat", models:[
      "500", 
      "Panda"]}
      ,
    {name:"Fiat", models:[
      "500", 
      "Panda"]}
      ,
    {name:"Fiat", models:[
      "500", 
      "Panda"]}
  ]
  ,
  dquests: [ //done
    {name:"Roger's Apple", models:[
      "Hey there, Name, I am Roger who teaches new Maplers lots of information.", 
      "I know you are busy! Please spare me some time. I can teach you useful information! Hahaha!", 
      "So ... Let's do this for fun! Abacadabra!",
      "Surprised?! If youy HP reahes 0, then you are in trouble. Now I will give you Roger's Apple. Please take it. Open the item window and press 'I' to consume.",
      "Please talk to me again after your HP is 100%.",
      "End"]},
    {name:"BMW", models:[
      "320", 
      "X3", 
      "X5"]},
    {name:"Fiat", models:[
      "500", 
      "Panda"]}
  ]
    ,
  nquests: [ //next
    {name:"Roger's Apple", models:[
      "Hey there, Name, I am Roger who teaches new Maplers lots of information.", 
      "I know you are busy! Please spare me some time. I can teach you useful information! Hahaha!", 
      "So ... Let's do this for fun! Abacadabra!",
      "Surprised?! If your HP reahes 0, then you are in trouble. Now I will give you Roger's Apple. Please take it. Open the item window and press 'I' to consume.",
      "Please talk to me again after your HP is 100%.",
      "End"]},
    {name:"BMW", models:[
      "320", 
      "X3", 
      "X5"]},
    {name:"Fiat", models:[
      "500", 
      "Panda"]}
  ]
}

/*List Avaliable Quests */
for (let i in myObj.aquests) {
  a += "<h3 class='open'>" + myObj.aquests[i].name + "</h3>";
}
/*List Next Quests */
for (let i in myObj.nquests) {
  a += "<h3 class='next'>" + myObj.nquests[i].name + "</h3>";
}

/*List Done Quests */
for (let i in myObj.dquests) {
  a += "<h3 class='done'>" + myObj.dquests[i].name + "</h3>";
}

/*List Details */
if (myObj.aquests) {
  i = 0;
  b += "<h3 class='open'>" + myObj.aquests[i].name + "</h3>";
  for (let j in myObj.aquests[0].models) {
    b += myObj.aquests[i].models[j] + "<br>";
  }
}

document.getElementById("quest").innerHTML = x;

/*working quest list*/
document.getElementById("log").innerHTML =  "<button id = 'new' class='new' onclick='myInput()'>new </button>"+"<button class='sort'>sort</button>"+"<h2>Quests</h2>" +o;
document.getElementById("details").innerHTML = "<h2>Details</h2>" +"<string>"+b+"</string>";

/* <button onclick='myInput()'>Try it</button>
}; */

function apples() { //change details on click
  document.getElementById("details").innerHTML = "<h2>Detail</h2>"+"<string>"+b+"</string>"+"<br><button>done</button>";


 /*document.getElementById('log').addEventListener('click', function() {
    document.getElementsByClassName('done').style.backgroundColor = 'red';

}) */
  
}; 

/*document.activeElement.style.backgroundColor = 'pink';


/*active class */
nom = document.querySelector(".flex").querySelectorAll("h3");
console.log(nom);

nom.forEach(element => {
  element.addEventListener("click",function(){
    nom.forEach(h3 => h3.classList.remove("active"))
    this.classList.add("active")
    
   const lemon = (element) => element;
    var i = this;
  
console.log(myObj.aquests.findIndex(lemon));

/*
    i = 1;
    b = "<h3 class='open'>" + myObj.aquests[i].name + "</h3>";
  for (let j in myObj.aquests[i].models) {
    b += myObj.aquests[i].models[j] + "<br>";
  }

  document.getElementById("details").innerHTML = "<h2>Details</h2>"+"<string>"+b+"</string>"+"<button>srt</button>"; 

  
  apples()

  // find index of array
  console.log(myObj.aquests.indexOf("BMW"));

  // find index of array
  console.log(myObj.aquests.indexOf(element));

  //print items and index for 
  myObj.aquests.forEach((item, index, array) => {
  console.log(item, index);
});

//print current item
*/
  }


)

    
});  

/* Hide gamified */

function myInput() {
  var x = document.getElementById("myText").value;
  document.getElementById("log").innerHTML =  "<button id = 'new' class='new' onclick='myInput()'>new </button>"+"<button class='sort'>sort</button>"+"<h2>Quests</h2>" +o+"<h3 class='open'>"+x+"</h3>";
}