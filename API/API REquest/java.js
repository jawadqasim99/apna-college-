// let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//  return  res.json()
// })
// .then((data)=>{
//     console.log(data.fact);
// })
// .catch((err)=>{
//     console.log(err);
// })
// ............................................. 
// async function apiRequest(){
//    try {
//     let req1=await fetch(url);
//     let data1=await req1.json();
//     console.log(data1.fact);

//     let req2=await fetch(url);
//     let data2=await req2.json();
//     console.log(data2.fact);
//    } catch (error) {
//     console.log(error);
//    } 
// }
// apiRequest();

// ................................................ 

// Using a axios mathed in wihich we donot need do convert a data into JSON format 
// let h1=document.querySelector("h1")


// async function apiRequest(){
//     try {
//      let req1=await axios.get(url);
   
//      h1.innerText=req1.data.fact;

 
//     } catch (error) {
//      console.log(error);
//     } 
//  }
//  apiRequest();


// ................................................. 

// header call with axios mathod


let url ='https://icanhazdadjoke.com/j/<joke_id>';

async function jokeDad() {
   
    try {
        let header={headers:{Accept:"application/json"}};
        let joke=await axios.get(url,header);
        console.log(joke.data.joke);
    } catch (e) {
       console.log(e); 
    }
}