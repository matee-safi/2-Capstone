const submit = async (id) => {
  const nameInput = document.querySelector('.name-input');
  const commentInput = document.querySelector('.comment-input');
  if (nameInput.value && commentInput.value) {
    const data = {
      item_id: id,
      username: nameInput.value,
      comment: commentInput.value,
    };
    try {
      const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9uvruX8VsHf7B0nGETkN/comments', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Success:', result);
    } catch (error) {
      console.log('error', error);
    }
    nameInput.value = '';
    commentInput.value = '';
    const popbg = document.querySelector('.pop-background');
    popbg.remove();
  }
};

export default submit;