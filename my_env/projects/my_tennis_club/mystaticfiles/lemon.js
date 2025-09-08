


/*active class */
nom = document.querySelector(".flex").querySelectorAll("h3");
apple = document.querySelector(".active")
console.log(nom);

nom.forEach(element => {
  element.addEventListener("click",function(){
    nom.forEach(h3 => h3.classList.remove("active"))
    this.classList.add("active")
    
//   const lemon = (element) => element;
//    var i = this;
  
//console.log(myObj.aquests.findIndex(lemon));
//document.getElementById('details').innerHTML = '<h3>'+apple+'</h3>';
//"<h3 class='{{ x.cclass }}'>{{ x.item }} </h3>";

//document.getElementById('details').innerHTML = nom;
  }
)
});  

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
               document.getElementById('details').innerHTML = "hi";
                 //document.getElementById("details").innerHTML  = "<h3>Experience<div class='container'> <span class='lvl'>Level: 2<div class='skills exp'>"+selectedObject.exp+"%</div></div>"+"<h2 class='"+selectedObject.class+"'>"+selectedObject.name+"</h2>"+"<p>"+selectedObject.description+"</p><button class='done'>done</button><button class='next'>next</button><button class='later'>later</button><button class='open'>open</button>";
//exp.style.width = width + "%";width+50;
            }
            
            //console.log(selectedObject);
        }
    });