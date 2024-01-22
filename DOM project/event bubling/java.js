let div=document.querySelector(".container");
let inn=document.querySelector(".inner");
let list=document.querySelectorAll("li");
div.addEventListener("click" , function() {
    console.log("click div");
})

inn.addEventListener("click" , function(e) {
    e.stopPropagation();
    console.log("click inner-div");
})

for(li of list){
    li.addEventListener("click" , function(e) {
        e.stopPropagation();
        console.log("click list");
    })
}