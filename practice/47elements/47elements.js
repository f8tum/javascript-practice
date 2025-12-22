// Step 1 create the element
const newH1 = document.createElement("h1");


// Step 2 addd attributes/properties
newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// Step 3 append element to DOM
document.getElementById("box1").prepend(newH1);
document.body.insertBefore(newH1, box2);

// Step 4 remove html element
document.getElementById("box3").remove();