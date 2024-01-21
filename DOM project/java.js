let para=document.createElement('p');

para.innerText="Hey i'am read";
para.classList.add("para");
document.querySelector("body").append(para);

let heading=document.createElement("h3");
heading.innerText="I am blue";
heading.classList.add('heading')
document.querySelector("body").append(heading);

let div=document.createElement("div");
let h=document.createElement("h1");
let p=document.createElement("p");
h.innerText="my name is DIV";
p.innerText="para is div";
div.append(h);
div.append(p);
div.classList.add("container");
document.querySelector("body").append(div);




