let url='http://universities.hipolabs.com/search?country=';


let btn=document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let input=document.querySelector("input").value;
  
let dataFinal=await fetchUni(input);
console.log(dataFinal);

show(dataFinal);
console.log(dataFinal);



})
function show(dataFinal) {
    let div=document.querySelector(".main");
    let ul=document.querySelector("#list");
   
div.classList.add("dis");
//    div.innerText='';
    ul.innerText='';

    for(col of dataFinal){
let li=document.createElement("li");
let h6=document.createElement("p");

li.innerText=col.name;
li.classList.add("list_item");
ul.appendChild(li);
h6.innerText=col.web_pages
li.append(h6)
        
    }
 
}



async function fetchUni(country) {
   try {
    let req=await axios.get(url+country);
    return req.data;
   } catch (e) {
    return `server error`
    
   }
    
}

