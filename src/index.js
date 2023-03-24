import './style.css';
import navLogo from './images/restaurant.png';
import crossIcon from './images/remove.png';

document.querySelector('.nav-logo').src = navLogo;

// Define variables
const API_KEY = '1';
const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}`;
const API_LINK = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
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

// Function to add a like for a meal by ID
async function addLikeById(id) {
  const response = await fetch(`${API_LINK}api/v1/likes/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
}

// Function to display meals list
async function displayMeals() {
  const meals = await fetchMeals();
  mealsList.innerHTML = meals
    .map((meal) => `
        <li id="${meal.idMeal}">
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <div><span>${meal.strMeal}</span>
          <button class="like-btn">
            <i class="fas fa-heart">Like</i>
          </button></div>
          <button class="comment-btn">Comment</button>
          <button class="reservation-btn">Reservations</button>
        </li>
      `)
    .join('');
}

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
  pop.appendChild(closeCross);
  pop.appendChild(cardTitle);
  pop.appendChild(cardImg);
  pop.appendChild(instructiontitle);
  pop.appendChild(cardInstructions);
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
