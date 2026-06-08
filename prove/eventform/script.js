const form          = document.querySelector("#eventTicketForm");
const personType    = document.querySelector("#personType");
const codeContainer = document.querySelector("#codeContainer");
const codeLabel     = document.querySelector("#codeLabel");
const code          = document.querySelector("#code");
const output        = document.querySelector("#output");
// mmm... like bundling cables

// unused, but since I'm reusing the same box for student ID/access code, in practice I
// would want an easy way to warn the server what format to expect and how to parse it
let isStudent = false;

function updateNotesField() {
  const value = personType.value;
  // this had better be valid...
  if (value == "")
  {
    codeContainer.hidden = true;
    isStudent = false;
  }
  else if (value == "student")
  {
    codeContainer.hidden = false;
    isStudent = true;
    codeLabel.textContent = "Student I#";
  }
  else if (value == "guest")
  {
    codeContainer.hidden = false;
    isStudent = false;
    codeLabel.textContent = "Access Code"
  }
  else // let me know if this ever executes
  {
    codeContainer.hidden = false;
    codeContainer.innerHTML = "<a style=\"font-size: 24px;\" href=\"https://youtu.be/A_Gj-RJeeng?si=j73EMVLm9QynfsRy&t=21\" target=blank>what</a>";
    //isStudent = probably; // uncomment if you're not a coward
  }
}

personType.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.personType.value;
  const eventDate = form.eventDate.value;
  const codeValue = form.code.value.trim();

  
  // Validate I-number for students
  if (type === 'student' && codeValue.length !== 9)
  {
    output.textContent = "Student I# must be 9 digits";
    return;
  }
  
  // Validate event code for guests
  if (type === 'guest' && codeValue !== 'EVENT131')
  {
    console.log(codeValue);
    output.textContent = 'Incorrect event code';
    return;
  }

  // Validate date
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date."; 
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateNotesField();
});