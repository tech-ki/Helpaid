const fruits = ["Banana", "Orange", "Apple", "Mango"];
const quest = ["One", "Two", "Three", "Four"];

let x = "";
let a = "";
let b = "";
const myObj = {
  name: "John",
  age: 30,
  aquests: [
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
  dquests: [
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
  nquests: [
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
}

/*List Avaliable Quests */
for (let i in myObj.aquests) {
  a += "<h3 id='open'>" + myObj.aquests[i].name + "</h3>";
}
/*List Next Quests */
for (let i in myObj.nquests) {
  a += "<h3 id='next'>" + myObj.nquests[i].name + "</h3>";
}

/*List Done Quests */
for (let i in myObj.dquests) {
  a += "<h3 id='done'>" + myObj.dquests[i].name + "</h3>";
}

/*List Details */
if (myObj.aquests) {
  i = 0;
  b += "<h3 id='open'>" + myObj.aquests[i].name + "</h3>";
  for (let j in myObj.aquests[0].models) {
    b += myObj.aquests[i].models[j] + "<br>";
  }
}

document.getElementById("quest").innerHTML = x;
document.getElementById("log").innerHTML =  "<h2>Quests</h2>" +a;
document.getElementById("details").innerHTML = "<h2>Details</h2>" +"<string>"+b+"</string>";

document.getElementById("log").onclick = function() {
  apples()
};

function apples() {
  i = 1;
  b = "<h3 id='open'>" + myObj.aquests[i].name + "</h3>";
  for (let j in myObj.aquests[0].models) {
    b += myObj.aquests[i].models[j] + "<br>";
  }

  document.getElementById("details").innerHTML = "<h2>Details</h2>"+"<string>"+b+"</string>";


  document.getElementById('log').addEventListener('click', function() {
    document.getElementById('done').style.backgroundColor = 'red';
})
  
};

document.activeElement.style.backgroundColor = 'yellow';
