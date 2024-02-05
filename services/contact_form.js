console.log('contact_form.js loaded');
/*
    This file is responsible for handling the contact form.
*/

/*
    This function is responsible for handling the form submission.
    It gets the form data from the DOM and displays an alert if the form is submitted.
    TODO: Implement this function.
*/
function handleFormSubmit(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get the form data from the DOM
  const form = event.target;
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  // Check if the form data is valid (all fields are filled in)
  if (!name || !email || !message) {
    // Handle Error if the form data is not valid
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // Send alert if the form data is valid and the form is submitted
  alert(`Merci ${name} pour votre message! Nous vous contacterons bientôt sur l'adresse mail : ${email}.`);

  // Clear the form fields
  form.reset();
}