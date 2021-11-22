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

  console.log('::: Form Submitted :::');

  Client.postData('http://localhost:8081/data', { url: inputValue }).then((res) => {
    console.log(res);
    Client.updateUI(res);
  });
}

export { handleSubmit };
