/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost = 35;
var fullCostPerDay = 35;
var halfCostPerDay = 20;
var dayCounter = 0;
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");
var full = document.getElementById("full");
var half = document.getElementById("half");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function active(element) {
    element.classList.add("clicked");
    dayCounter+=1;
    recalculate();
}


monday.addEventListener("click", function() {
    active(monday);
  });
tuesday.addEventListener("click", function() {
    active(tuesday);
  });
wednesday.addEventListener("click", function() {
    active(wednesday);
  });
thursday.addEventListener("click", function() {
    active(thursday);
  });
friday.addEventListener("click", function() {
    active(friday);
  });




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById("clear-button").addEventListener("click", deactivate);


function deactivate(){
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    dayCounter = 0;
    recalculate();
    
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfac() {
    half.classList.add("clicked");
    full.classList.remove("clicked");
    cost = halfCostPerDay;
    recalculate();
}
half.addEventListener("click", halfac);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fullac() {
    half.classList.remove("clicked");
    full.classList.add("clicked");
    cost = fullCostPerDay;
    recalculate();
}
full.addEventListener("click", fullac);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    var total = dayCounter * cost;
    let costLabel = document.getElementById("calculated-cost");
    costLabel.innerHTML = total;
}

