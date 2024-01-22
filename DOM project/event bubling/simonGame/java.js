let gameSeq=[];
let userSeq=[];
let colors=["red" , "green" , "blue" ,"yellow"];
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started == false){
        
        started=true;
        levelUp();
    }
})

function flashBtn(selectFlash) {
    selectFlash.classList.add("flash");
    setTimeout(function () {
        selectFlash.classList.remove("flash");
    },250)

    
}


function levelUp() {
    level++;
    let heading=document.querySelector("h3");
    heading.innerText=`Level ${level}`;
    let flashVal=Math.floor(Math.random() * 3);
    let flashValue=colors[flashVal];
    let selectFlash=document.querySelector(`.${flashValue}`);
    
    flashBtn(selectFlash);

    

    
}