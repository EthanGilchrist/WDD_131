// Grab the form element from the DOM, print it out
const form = document.querySelector('#fsyForm');
//alert(form);
console.log(form);

// Create an event listener on the form
// calls a function when "submit"

form.addEventListener("submit", event => {
    event.preventDefault();
    console.log(event);

    const firstName = form.firstName.value;
    console.log(firstName);
    let values = []
    values.push(firstName);
    values.push(form.lastName.value);
    values.push(form.email.value);
    values.push(form.travelRange.value);
    values.push(form.availableDate.value);
    const campuses = form.campus;
    console.log(campuses);
    for (let i = 0; i < campuses.length; i++)
    {
        values.push(campuses[i].value);
    }
    console.log(values);
});