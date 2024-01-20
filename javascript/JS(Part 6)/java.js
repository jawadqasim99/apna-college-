

// function largeNum() {
//     let q1=[2,3,4,2,3,4,5];
// let num=4;

// for (let i = 0; i < q1.length; i++) {
    
//   if(q1[i]>num){
//     q1.splice(i,1);
//   }
    
// }
// return q1;   
// }

// let arr=largeNum();
// console.log(arr);


// let g2=q1.splice(0,2);
// console.log(g2);
// console.log(q1);
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;
// //elements larger than a number num
// function getElements(arr, num) {
// for (let i = 0; i < arr.length; i++) {
// if (arr[i] > num) {
// console.log(arr[i]);
// }
// }
// }
// getElements(arr, num);


// -------------------------------------------
// Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

// let str="abcdabcdefgggh";
// let ans="";
// function unique(params) {
//     for (let i = 0; i < str.length; i++) {
//         // let temp=str[i];
//         if(ans.indexOf(str[i])==-1){
//             ans += str[i];
//         }
        
           
//         }
//         return ans;
// }
// console.log(unique());
// console.log("a");

// ......................................

// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

// let country = ["Australia", "Germany", "United States of America"];
// let result;
// function log_country(country) {
//     for (let i = 0; i < country.length; i++) {
//         let temp=0;

//       if(country[i].length>temp){
// temp=country[i].length;
// result=country[i];
//       }

        
//     }
//     return result;
    
// }

// console.log(log_country(country));

// ....................................................

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

// let string="aaaegvdfha";
// let count=0;

// function count_vowels(string) {
//     for (let i = 0; i < string.length; i++) {
//         switch (string[i]) {
//             case "a":
//                 count++; 
//                 break;
//                 case "e":
//                 count++; 
//                 break;
//                 case "i":
//                 count++; 
//                 break;
//                 case "o":
//                 count++; 
//                 break;
//                 case "u":
//                 count++; 
//                 break;
        
//             default:
//                 break;
//         }
        
//     }

//     return count;
// }

// console.log(count_vowels(string));

// .......................................

// let str = "apnacollege";
// function countVowels(str) {
// let count = 0;
// for (let i = 0; i < str.length; i++) {
// if (
// str.charAt(i) == "a" ||
// str.charAt(i) == "e" ||
// str.charAt(i) == "i" ||
// str.charAt(i) == "o" ||
// str.charAt(i) == "u"
// ) {
// count++;
// }
// }
// return count;
// }
// console.log(countVowels(str));


// ..........................................


let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}

console.log(generateRandom(start,end));



