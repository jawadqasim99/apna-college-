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

// let h1=document.querySelector("h1");

// function chnageColors(colors,time,callbacks) {
//     setTimeout(()=>{
//         h1.style.color=colors;
//         if(callbacks) callbacks();
//     },time)
    
// }

// chnageColors("red",1000,()=>{
//     chnageColors("green",1000,()=>{
//         chnageColors("yellow",1000,()=>{
//             chnageColors("cyan",1000);
//         });
//     });
// });


// function interSpeed(data) {
//     return new Promise((resolve , reject)=>{
//         let speed=Math.floor(Math.random() * 10)+1;
//     if(speed > 4){
// resolve("Succcessfully!!");
//     }else{
//         reject("internet Speed poor!!");
//     }
//     });
    
    
// }

// let request=interSpeed("apna college"); 
// request.then((res)=>{
//     console.log(res);
// console.log("Successfully upload!!!");
// return interSpeed("apna");
// })
// .then((res)=>{
//     console.log(res);
//     console.log("snd fill");
// })
// .catch((error)=>{
//     console.log(error);
//     console.log("Server error");
// })

// let h1=document.querySelector("h1");

// function chnageColors(colors,time,callbacks) {
//     setTimeout(()=>{
//         h1.style.color=colors;
//         if(callbacks) callbacks();
//     },time)
    
// }

// chnageColors("red",1000,()=>{
//     chnageColors("green",1000,()=>{
//         chnageColors("yellow",1000,()=>{
//             chnageColors("cyan",1000);
//         });
//     });
// });

function  changeColorsPromise(colors,delay) {
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            h1.style.color=colors;
            resolve("Colors is changed") 
        },delay)
    })
    
}

async function demo(){
    await changeColorsPromise("red" , 1000);
    await changeColorsPromise("green" , 1000);
    await changeColorsPromise("blue" , 1000);
     changeColorsPromise("orange" , 1000);
}