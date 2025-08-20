// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
const lvl = document.querySelectorAll("span");
const lvls = document.getElementById("lvls");
lvls.innerHTML = Number(0);
    
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert("The button id is "+button.id);
    lvls.innerHTML =  Number(lvls.innerHTML)+5;
  });
});