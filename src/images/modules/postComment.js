const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');

const submit = async (id) => {
    preventDefault();
  if (nameInput.value && commentInput.value) {
    const data = {
      "item_id": id,
      "username": nameInput.value,
      "comment": commentInput.value,
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
      console.error('Error:', error);
    }
    nameInput.value = '';
    commentInput.value = '';
  }
};

export default submit;