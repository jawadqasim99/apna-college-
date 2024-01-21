// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array

// let array=[1,2,3,4,4,5];

//   let sqare = array.map((num)=>num*num);
//   console.log(sqare);
//   let sum = array.reduce((eml,val)=>eml+val);
//   console.log(sum);
//   let avg=sum/array.length;
//   console.log(Math.floor(avg));


//   ..........................................

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

// let array = [5,10,15,20,25];

// let new_array = array.map((val)=>val+5);
// console.log(new_array);


// ............................................

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

// let array=["jawad" , "Qasim" , "saim" , "madni"];

// array.forEach((val)=>{
    
//     console.log(val.toUpperCase());
// })

// .............................................. 


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

// let array = [1,2,3,4];

// const  doubleAndReturnArgs= (arr , ...arg)=>[ ...arr, ...arg.map ((v)=>v*2),
// ];

// console.log(doubleAndReturnArgs([1,2,3] , 4 ,4));

// .............................. 
 

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); 