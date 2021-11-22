// updateUI function
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

export { updateUI };