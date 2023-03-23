const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((button) => {
  button.addEventListener('click', async () => {
    const { mealId } = button.dataset;
    const response = await fetch(`${API_LINK}/likes/${mealId}`, {
      method: 'POST',
    });
    const data = await response.json();
    button.querySelector('span').textContent = data.likes;
  });
});
