let in_value=document.querySelector("input");
let btn=document.querySelector("button");
let list =document.querySelector("ul");

btn.addEventListener("click",function(){
    let elm=document.createElement("li");
    let btns=document.createElement("button");
    btns.innerText="Delete";
     value=in_value.value;
    in_value.value="";   
    elm.innerText=value;
    list.append(elm);
    elm.appendChild(btns);


    
   
})

list.addEventListener("click" , function(e){
    console.dir(e.target);
    if(e.target.nodeName == "BUTTON"){
        
       let listName=e.target.parentElement;
       listName.remove();
    }
})


// let btnsa=document.querySelectorAll(".btns");
// for(del of btnsa){
//     del.addEventListener("click" ,function(){
        
//         let dels=this.parentElement;
//         dels.remove();
       
//         }) 
// }
