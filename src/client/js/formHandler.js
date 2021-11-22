function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let inputValue = document.getElementById('url').value;

  if (Client.checkURL(inputValue)) {
    console.log('Looks like an URI');
  } else {
    alert('Not a valid URI');
    return;
  }

  fetch('http://localhost:8081/data', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: inputValue,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      updateUI(data);
    });
}

const updateUI = (data) => {
  try {
    document.getElementById('agreement').innerHTML = data.agreement;
    document.getElementById('confidence').innerHTML = data.confidence;
    document.getElementById('irony').innerHTML = data.irony;
    document.getElementById('score').innerHTML = data.score_tag;
    document.getElementById('subjectivity').innerHTML = data.subjectivity;
  } catch (error) {
    console.log('error', error);
  }
};

export { handleSubmit };
