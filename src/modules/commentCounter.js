const commentCounter = () => {
  const output = document.querySelectorAll('.comment-list li');
  const span = document.querySelector('.comment-count');
  span.innerHTML = output.length;
};

export default commentCounter;