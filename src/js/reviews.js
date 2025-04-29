import axios from 'axios';

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

Swiper.use([Navigation, Keyboard]);
import 'swiper/css';

const reviewsWrap = document.querySelector('#reviews-container');
const errorReviews = document.querySelector('.error-message');
const hideBtn = document.querySelector('.swiper-btns');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

document.addEventListener('DOMContentLoaded', displayReviews);

const swiper = new Swiper('.swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

// отримаємо всі відгуки з API
async function getReviews() {
  try {
    const { data } = await axios.get('/reviews');
    return data;
  } catch (error) {
    console.log('Error fetching reviews');
    showError();
    btnHide();
  }
}

//рендер відгуків
function renderReviews(reviews) {
  const markup = reviews
    .map(
      ({ author, avatar_url, review }) => `
          <li class="swiper-slide libox">
            <div class="review-card">
            <p class="review-text">${review}</p>
            <div class="review-info">
              <img src="${avatar_url}" alt="${author}" class="review-avatar" />
              <h3 class="review-author">${author}</h3>
              </div>

            </div>
          </li>
        `,
    )
    .join('');

  reviewsWrap.insertAdjacentHTML('beforeend', markup);
  swiper.update();
}

// функція яка відображає відгуки або повідомлення про помилку
async function displayReviews() {
  const reviews = await getReviews();
  if (reviews) {
    renderReviews(reviews);
  }
}

function showError() {
  errorReviews.classList.remove('visually-hidden');
}

function btnHide() {
  hideBtn.classList.add('visually-hidden');
}
