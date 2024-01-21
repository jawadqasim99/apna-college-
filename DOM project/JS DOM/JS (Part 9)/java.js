// Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to “Click me”;

// let input = document.createElement("input");
// let btn=document.createElement("button");
// btn.innerText="Click me!";
// document.querySelector("body").append(input);
// document.querySelector("body").append(btn);

// Qs2. Add following attributes to the element :
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

// input.placeholder="username";
// btn.setAttribute("id","btn");

// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.
// let button=document.querySelector("#id");
// button.attributes("btn");



// Qs4. Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.
let h1 = document.createElement("p");
h1.innerHTML="<u>DOM Practice</u>";
h1.classList.add("head");

document.querySelector("body").append(h1);