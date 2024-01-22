// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }


// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();    

// setTimeout(function(){
//     console.log("Apna collede");
// },2000)

// setTimeout(function(){
//     console.log("Apna apna collede");
// },3000)

// console.log("jawad");

let h1=document.querySelector("h1");

function chnageColors(colors,time,callbacks) {
    setTimeout(()=>{
        h1.style.color=colors;
        if(callbacks) callbacks();
    },time)
    
}

chnageColors("red",1000,()=>{
    chnageColors("green",1000,()=>{
        chnageColors("yellow",1000);
    });
});

// chnageColors("yellow",3000);
// chnageColors("cyan",4000);

