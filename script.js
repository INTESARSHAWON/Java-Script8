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




let newButton3= document.createElement("button");
console.dir(newButton3);
newButton3.innerText="I am before button";

let div3 = document.querySelector("div");
div3.before(newButton3); //node er ekdom age jukto hobe




let newButton4= document.createElement("button");
console.dir(newButton4);
newButton4.innerText="I am after button";

let div4 = document.querySelector("div");
div4.after(newButton4); //node er ekdom pore jukto hobe



let heading= document.createElement("h1");
heading.innerHTML="<i> I am learing JS append, prepend, before, after </i>";

let body= document.querySelector("body");
body.before(heading); //node er ekdom age jukto hobe



//delete
let paragraph= document.querySelector("p");
paragraph.remove();

//append child ar removechild ei duita use korte jante hobe, porte bolse MDN theke dekhay nai




//exercise1
let anotherButton= document.createElement("button");
anotherButton.innerText="I am exercise button";
anotherButton.style.backgroundColor="red";
anotherButton.style.color="white";

let targettingBody= document.querySelector("body");
targettingBody.before(anotherButton);




//exercise2

let newParagraph= document.querySelector("p");
newParagraph.classList.add("anotherclass");
// .classList.remove() diye delete o kora jay, MDN a sob ache
