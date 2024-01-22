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
function userFlashBtn(selectFlash) {
    selectFlash.classList.add("userflash");
    setTimeout(function () {
        selectFlash.classList.remove("userflash");
    },250)

    
}
let heading=document.querySelector("h3");

function levelUp() {
    userSeq=[];
    level++;
   
    heading.innerText=`Level ${level}`;
    let flashVal=Math.floor(Math.random() * 3);
    let flashValue=colors[flashVal];
    let selectFlash=document.querySelector(`.${flashValue}`);
    
    flashBtn(selectFlash);
    gameSeq.push(flashValue);
    console.log(gameSeq);
}

function matching(idx) {
    
    if(gameSeq[idx] == userSeq[idx]){
       if(gameSeq.length == userSeq.length ){
        // levelUp();
        setTimeout(levelUp,1000);
       }

    }else{
        
        heading.innerHTML=`Game Over! Your Score  was <b>${level}</b> Press any key to start`; 
        resat();

        
    }
    
}

function pressbtn() {
let btn=this;

colorvalue=btn.getAttribute("id");
    userSeq.push(colorvalue);
    // console.log(userSeq);
    matching(userSeq.length-1);
 



  userFlashBtn(btn);
 
   
}

let pressBtn=document.querySelectorAll(".inner_div");
for(btn of pressBtn){
    btn.addEventListener("click" ,pressbtn)
}

function resat() {
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
    
}
