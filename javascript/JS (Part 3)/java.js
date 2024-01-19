// let array=[7,9,0,-2];
// let updated=array.slice(0,3);
// console.log(updated);
// let updated_=array.slice(array.length-n);
// console.log(updated_);
// console.log(array.length);
// // let s=""
// // let permot=prompt();

// // while (permot !== s) {
  
// //         alert("String is not blank");
// //        permot=prompt();
  
  
    
    
// // }


// // alert(array.includes(7));

// let s="ApnaCollege";
// let c=0;
// if(s[c]==s[c].toLowerCase()){
//     console.log("Lower case");
// }else{
// console.log("upercase");
// }
// let fruit=["Apple" , "Orange" , "banana", "litchi"];
// for (let i = 0; i < fruit.length; i++) {
//     console.log(i,fruit[i]);
    
// }

// let array = [["Jawad " , "Qasim" ,"Saim"],["Ali" , "zain" , "Kahsif"]];
// for (let i = 0; i < array.length; i++) {
//     console.log(`List# ${i}`);
//     for (let j = 0; j < array[i].length; j++) {
//        console.log(array[i][j]);
        
//     }
    
// }

// let arr = [1,2,3,4,5,6,2,3];
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] == 2){
//     arr.splice(i,1);
//    }
    
// }
// console.log(arr);

// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy > 0) {
// count++;
// copy = Math.floor(copy/10);

// }
// console.log(count);

let number = 123543;
let sum = 0;
let copy=number;

while(copy > 0){
digit= copy%10;
sum += digit;
copy=Math.floor(copy/10);
}
console.log(sum);

   