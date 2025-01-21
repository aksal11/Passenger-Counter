// document.getElementById("count-el").innerText= 5

let countEl = document.getElementById("count-el") //pass in arguments
let save1 = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")




// initialize the count as zero
let count = 0
// listen for clicks on the increment button - use onclick="" attribute 
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

function increment(){
    // console.log("clicked")
    count += 1
    countEl.innerText = count   // displays the count updated
    // console.log(count)
}

// create a function save which logs out the count value
function save(){
    let countStr = count + "-"
    // save1.innerText = count
    // saveEl.innerText += countStr
    saveEl.textContent += countStr
    // console.log(count)
    countEl.textContent = 0;
    count = 0;
}

save()




