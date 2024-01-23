let url='http://universities.hipolabs.com/search?name=';


let btn=document.querySelector("button");

btn.addEventListener("click" , async ()=>{
    let input=document.querySelector("input").value;
  
let dataFinal=await fetchUni(input);
console.log(dataFinal);

show(dataFinal);
// ul.appendchild("li");


})
function show(dataFinal) {
    let ul=document.querySelector("ol");
    ul.innerText='';
    for(col of dataFinal){
let li=document.createElement("li");

li.innerText=col.name   ;
ul.appendChild(li);
        
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

