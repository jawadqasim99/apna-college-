let todo=[];
let req=prompt("Plz enter a request you wanted...");
while (true) {
    if(req == "quit"){
        console.log("...Quit the list...");
        break;
    }
    if (req == "list") {
        console.log("...............");
        for (let i = 0; i < todo.length; i++) {
           console.log(i, todo[i]);
            
        }
        
    }
    if (req == "add") {
     let add_task=prompt("Plz enter the task  you wanted to add");
     todo.push(add_task);
     console.log("Task is add successfuly...");
        
    }
    if (req == "delete") {
      let idx=  prompt("Plz enter the task index");
      todo.splice(idx,1);
      console.log("Deleted successfully...");

     
    }
req=prompt("Plz enter a request you wanted..."); 
    
}