import './style.css';
import navLogo from './images/restaurant.png';
import crossIcon from './images/remove.png';
import getComments from './modules/getComment.js';
import commentCounter from './modules/commentCounter.js';
import postComment from './modules/postComment.js';
import countMeals from './counteMeal.js';

document.querySelector('.nav-logo').src = navLogo;

// Define variables
const API_KEY = '1';
const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;
const API_LINK = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const INVOLV_API_KEY = '9uvruX8VsHf7B0nGETkN';
const mealsList = document.querySelector('#meals-list');
const mealDetails = document.querySelector('#meal-details');

// Function to fetch meals
async function fetchMeals() {
  const response = await fetch(`${API_URL}/search.php?s=`);
  const data = await response.json();
  return data.meals;
}

// Function to fetch meal details by ID
async function fetchMealById(id) {
  const response = await fetch(`${API_URL}/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0];
}

async function addLikeById(id) {
  const response = await fetch(`${API_LINK}apps/${INVOLV_API_KEY}/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: `${id}`,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (response) {
    const likesSpan = document.getElementById(`${id}likes`);
    if (likesSpan) {
      likesSpan.innerText = parseInt(likesSpan.innerText, 10) + 1;
    }
  }

  return 'worked';
}
// Function to fetch like for a meal by ID
async function fetchLikes() {
  const response = await fetch(`${API_LINK}apps/${INVOLV_API_KEY}/likes/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const data = response.json();
  return data;
}
async function displayMeals() {
//  document.getElementById('mealsCount').innerText = `(${countMeals(meals.length)})`;
  const updateMealsCount = (meals) => {
    const count = countMeals(meals.length);
    document.getElementById('mealsCount').innerText = `(${count})`;
  };
  // fetch meals data from API
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/')
    .then((response) => response.json())
    .then((data) => {
    // call updateMealsCount function with meals data
      updateMealsCount(data.meals);
    });
  // .catch((error) => {
  /// /  console.error('Error fetching meals:', error);
  // });

  const meals = await fetchMeals();
  mealsList.innerHTML = meals
    .map((meal) => `
          <li id="${meal.idMeal}">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div><span>${meal.strMeal}</span>
            <button id="${meal.idMeal}" class="like-btn">
              <i style="pointer-events: none;" class="fas fa-heart">Like</i>
              <span style="pointer-events: none;" id="${`${meal.idMeal}likes`}" >0</span>
            </button></div>
            <button class="comment-btn">Comment</button>
            <button class="reservation-btn">Reservations</button>
          </li>
        `)
    .join('');

  fetchLikes().then((likes) => {
    likes.forEach((like) => {
      const likesSpan = document.getElementById(`${like.item_id}likes`);
      if (likesSpan) {
        likesSpan.innerText = like.likes;
      }
    });
  });

  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      if (e.target.className === 'like-btn') {
        const mealId = e.target.id;
        addLikeById(mealId);
      }
    });
  });
}

// Set the likes to 0 initially
const likeSpans = document.querySelectorAll('.like-btn span');
likeSpans.forEach((span) => {
  span.innerText = '0';
});

const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.className === 'like-btn') {
      const mealId = e.target.id;
      addLikeById(mealId);
    }
  });
});

// Function to display meal details
async function displayMealDetails(id) {
  const meal = await fetchMealById(id);
  const ingredients = [];
  // Collect all ingredients and measures into an array
  for (let i = 1; i <= 20; i += 1) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(
        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`,
      );
    } else {
      break;
    }
  }
  mealDetails.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h3>Ingredients</h3>
    <ul>${ingredients.map((ing) => `<li>${ing}</li>`).join('')}</ul>
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
    <button class="like-btn">Like</button>
  `;
}

// Add event listener for meals list and meal details
document.addEventListener('click', (e) => {
  if (e.target.matches('.like-btn')) {
    const { mealId } = e.target.parentElement.dataset;
    addLikeById(mealId);
  }
  if (e.target.matches('#meals-list li')) {
    const { mealId } = e.target.dataset;
    displayMealDetails(mealId);
  }
});

// Display meals list on page load
const popup = async (e) => {
  const popBackground = document.createElement('div');
  popBackground.classList.add('pop-background');
  const pop = document.createElement('div');
  pop.classList.add('pop');
  const closeCross = document.createElement('img');
  closeCross.src = crossIcon;
  closeCross.classList.add('close-cross');
  const cardImg = document.createElement('img');
  const cardTitle = document.createElement('h2');
  cardImg.classList.add('pop-image');
  const instructiontitle = document.createElement('h3');
  instructiontitle.innerHTML = 'Instructions: ';
  const cardInstructions = document.createElement('p');
  const mealItem = e.target.parentElement;
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.id}`);
  const data = await response.json();
  cardInstructions.innerHTML = data.meals[0].strInstructions;
  cardTitle.innerHTML = data.meals[0].strMeal;
  cardImg.src = data.meals[0].strMealThumb;
  const InstructionsDiv = document.createElement('div');
  InstructionsDiv.classList.add('instruction-container');
  InstructionsDiv.appendChild(instructiontitle);
  InstructionsDiv.appendChild(cardInstructions);
  const comments = document.createElement('div');
  comments.classList.add('comments-container');
  const commentTitle = document.createElement('h3');
  commentTitle.innerHTML = 'Comments(0)';
  const commentList = document.createElement('ul');
  commentList.classList.add('comment-list');
  commentList.innerHTML = 'No comments';
  const commentItems = await getComments(mealItem.id);
  if (commentItems.length > 0) {
    commentList.innerHTML = '';
    await commentItems.forEach((element) => {
      commentList.innerHTML += `
      <li>${element.creation_date} ${element.username}: ${element.comment}</li>
      `;
    });
    commentTitle.innerHTML = `Comments(${commentCounter(commentItems)})`;
  }
  comments.appendChild(commentTitle);
  comments.appendChild(commentList);
  const commentForm = document.createElement('div');
  commentForm.classList.add('add-comment-container');
  const formTitle = document.createElement('h3');
  formTitle.innerHTML = 'Add a Comment';
  const nameInput = document.createElement('input');
  nameInput.type = 'name';
  nameInput.className = 'name-input';
  nameInput.placeholder = 'Your name';
  const commentInput = document.createElement('textarea');
  commentInput.setAttribute('rows', 5);
  commentInput.className = 'comment-input';
  commentInput.placeholder = 'Your insights';
  const submitBtn = document.createElement('button');
  submitBtn.className = 'submit-btn';
  submitBtn.innerHTML = 'Comment';
  submitBtn.addEventListener('click', () => {
    postComment(mealItem.id);
  });
  commentForm.appendChild(formTitle);
  commentForm.appendChild(nameInput);
  commentForm.appendChild(commentInput);
  commentForm.appendChild(submitBtn);

  pop.appendChild(closeCross);
  pop.appendChild(cardTitle);
  pop.appendChild(cardImg);
  pop.appendChild(InstructionsDiv);
  pop.appendChild(comments);
  pop.appendChild(commentForm);
  popBackground.appendChild(pop);
  document.body.appendChild(popBackground);
  closeCross.addEventListener('click', () => {
    popBackground.remove();
    document.body.style.overflow = '';
  });
  document.body.style.overflow = 'hidden';
};

const addCommentEvent = async () => {
  await displayMeals();
  const commentBtn = document.querySelectorAll('.comment-btn');
  commentBtn.forEach((btn) => {
    btn.addEventListener('click', popup);
  });
};

addCommentEvent();
