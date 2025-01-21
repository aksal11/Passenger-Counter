// Pass in arguments for the required HTML elements
let countEl = document.getElementById("count-el"); // Display the count
let incrementBtn = document.getElementById("increment-btn"); // Increment button
let resetBtn = document.getElementById("reset-btn"); // Reset button
let saveBtn = document.getElementById("save-btn"); //save button
let saveEl = document.getElementById("save-el"); //scoreboard saved


// Initialize the count as zero
let count = 0;

// Listen for clicks on the increment button - use the onclick attribute
function increment() {
    count += 1; // Increment the count variable
    countEl.innerText = count; // Update the count in the HTML
}

// Listen for clicks on the reset button
function reset() {
    count = 0; // Reset the count variable
    countEl.innerText = count; // Update the count in the HTML
}

// listen for clicks on save button

function save(){
    let countStr = count + "-"; //append the count to the scoreboard
    saveEl.textContent += countStr //adds the count to the scoreboard

    // Generating random color for the scoreboard
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`;
    saveEl.style.color = randomColor; //random color on the scoreboard

    // reset the count every time you click save btn
    count = 0;
    countEl.innerText = count ; //re initialized to zero
}
