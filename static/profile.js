function submitProfile(evt) {
  evt.preventDefault();

  const data = {
    name: document.querySelector('#name-field').value,
    // fill in the rest
    age: document.querySelector("#age-field").value,
    occupation: document.querySelector("#occupation-field").value,
    // salary: document.querySelector().value,
    // education: document.querySelector().value,
    // state: document.querySelector("#state-field").value,
    // city: document.querySelector().value,
    // garden: document.querySelector().value,
    // tv: document.querySelector().value,
  };

  // make request to server to get the data
  // add the data the server returns to the document
  // (you can add it to the end of the div with ID "profiles")
  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application.json',
    },
  })
    .then((response) => response.json())
    .then((formData) => {
      document
        .querySelector('#profiles')
        .insertAdjacentHTML(
          'beforeend',
          ` <li>${formData.name} the ${formData.occupation} is ${formData.age}</li>`
        );
    });
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
