let url="https://catfact.ninja/fact";
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

async function apiRequest(){
   try {
    let req1=await fetch(url);
    let data1=await req1.json();
    console.log(data1.fact);

    let req2=await fetch(url);
    let data2=await req2.json();
    console.log(data2.fact);
   } catch (error) {
    console.log(error);
   } 
}
apiRequest();