const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;
  // Show the travel notes on the form if they are choosing many campuses and require it
  //console.log(value);
  if (value == "many")
  {
    notesContainer.hidden = false;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
  // Let the user know to select at least one campus
  if (selectedCampuses.length === 0)
  {
    console.log("Please choose at least one campus");
    output.textContent = "Please choose at least one campus.";
    return;
  }
  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note
  if (type === 'many' && note.length === 0)
  {
    console.log("Please include travel notes");
    output.textContent = "Please include travel notes."; // surely this is inaccessible due to HTML validation?
                // what the heck how come only your version has it? Where is it? What have you done with it?
    return;
  }
  
  //Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  if (type === 'many' && selectedCampuses.length === 1)
  {
    // you know, this has me thinking. If the compiler is smart, it will know that after this point,
    // selectedCampuses.length must be greater than 1. Well, javascript probably won't notice, but
    // I bet C# would. Which raises the question, suppose I have a return statement gated by an if statement
    // of extreme complexity? Can I trick the compiler into attempting to solve the riemann hypothesis in its
    // attempts to warn me about some error or another later in the code?
    output.textContent = 'You have selected "Two or more campuses" but only have one campus selected. Please select at least one other campus.';
    return;
  }

  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date."; 
    // is this shorthand for .innerHTML = "<p>text goes here</p>" or is it something else?
    // (a couple tests later)
    // ok now I'm even more confused. Calling output.innerHTML in the dev console
    // returns the string, not even wrapped in an HTML element at all.
    // Calling output.innerHTML = "apple"; is totally valid. Why do we even *need* .textContent?
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});