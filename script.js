// // JS theke Style a kivabe haat dea jay et niyei DOM2

// let div = document.querySelector("div");
// // console.log(div);

// div.style.backgroundColor= "white";
// div.style.backgroundColor= "purple";
// div.style.fontSize= "20px";
// div.innerText="Java Script";
// div.style.visibility= "hidden";

// // .style. evabe style a haat dea jay JS theke 



// // html, css a JS theke kivabe Access kora jay, Change kora jay eta dekhsi
// // Js teke kivabe add delete kora jay eta dekhbo ebar

let newButton1= document.createElement("button");
console.dir(newButton1);
newButton1.innerText="I am append button";

let div1 = document.querySelector("div");
div1.append(newButton1); //node er pore jukto hoise



let newButton2= document.createElement("button");
console.dir(newButton2);
newButton2.innerText="I am prepend button";

let div2 = document.querySelector("div");
div2.prepend(newButton2); //node er age (pre) jukto hoise
