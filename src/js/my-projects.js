import icon from '../img/icons.svg';
import project1 from '../img/project1.jpg';
import project1_2x from '../img/project1@2x.jpg';
import project2 from '../img/project2.jpg';
import project2_2x from '../img/project2@2x.jpg';
import project3 from '../img/project3.jpg';
import project3_2x from '../img/project3@2x.jpg';
import project4 from '../img/project4.jpg';
import project4_2x from '../img/project4@2x.jpg';
import project5 from '../img/project5.jpg';
import project5_2x from '../img/project5@2x.jpg';
import project6 from '../img/project6.jpg';
import project6_2x from '../img/project6@2x.jpg';
import project7 from '../img/project7.jpg';
import project7_2x from '../img/project7@2x.jpg';
import project8 from '../img/project8.jpg';
import project8_2x from '../img/project8@2x.jpg';
import project9 from '../img/project9.jpg';
import project9_2x from '../img/project9@2x.jpg';
import project10 from '../img/project10.jpg';
import project10_2x from '../img/project10@2x.jpg';

const projects = [
  {
    title: 'Wallet webservice',
    tech: 'React, JavaScript, Node JS, Git',
    image1x: project3,
    image2x: project3_2x,
    alt: 'Wallet webservice',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'Green harvest webservice',
    tech: 'React, JavaScript, Node JS, Git',
    image1x: project7,
    image2x: project7_2x,
    alt: 'Green harvest webservice',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'English Exellence website',
    tech: 'React, JavaScript, Node JS, Git',
    image1x: project5,
    image2x: project5_2x,
    alt: 'English Exellence website',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'PORTFOLIO WEBSITE',
    tech: 'HTML, SCSS, JavaScript',
    image1x: project4,
    image2x: project4_2x,
    alt: 'Portfolio Website',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'TRAVEL AGENCY SITE',
    tech: 'React, TypeScript, Tailwind',
    image1x: project6,
    image2x: project6_2x,
    alt: 'Travel Agency Website',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'VYSHYVANKA VIBES LANDING PAGE',
    tech: 'HTML, SCSS, JavaScript',
    image1x: project2,
    image2x: project2_2x,
    alt: 'VYSHYVANKA VIBES LANDING PAGE',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'POWER PULSE WEBSERVICE',
    tech: 'HTML, SCSS, JavaScript',
    image1x: project1,
    image2x: project1_2x,
    alt: 'POWER PULSE WEBSERVICE',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'CHEGO JEWELRY WEBSITE',
    tech: 'HTML, SCSS, JavaScript',
    image1x: project8,
    image2x: project8_2x,
    alt: 'CHEGO JEWELRY WEBSITE',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'FRUITBOX ONLINE STORE',
    tech: 'HTML, SCSS, JavaScript',
    image1x: project9,
    image2x: project9_2x,
    alt: 'FRUITBOX ONLINE STORE',
    link: 'https://github.com/psv0782/ChooseMe',
  },
  {
    title: 'STARLIGHT STUDIO LANDING PAGE',
    tech: 'HTML, SCSS, JavaScript',
    image1x: project10,
    image2x: project10_2x,
    alt: 'STARLIGHT STUDIO LANDING PAGE',
    link: 'https://github.com/psv0782/ChooseMe',
  },
];

let currentIndex = 0;
const batchSize = 3;

const projectsList = document.getElementById('projectsList');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const createProjectCard = (project) => {
  const li = document.createElement('li');
  li.className = 'project-card';
  li.innerHTML = `
    <img
      src="${project.image1x}"
      srcset="${project.image1x} 1x, ${project.image2x} 2x"
      alt="${project.alt}"
      class="project-img">
    <p class="project-tech">${project.tech}</p>
    <div class="link-visit">
      <h3 class="project-title">${project.title}</h3>
      <a href="${project.link}" class="project-btn" target="_blank" rel="noopener noreferrer">
        VISIT
        <svg class="icon-project" width="18" height="18">
          <use href="${icon}#arrow-visit"></use>
        </svg>
      </a>
    </div>
  `;
  setTimeout(() => li.classList.add('show'), 10);
  return li;
};

const renderProjectsBatch = () => {
  const slice = projects.slice(currentIndex, currentIndex + batchSize);
  const newCards = [];

  slice.forEach((project) => {
    const card = createProjectCard(project);
    projectsList.appendChild(card);
    newCards.push(card);
  });

  currentIndex += batchSize;

  if (currentIndex >= projects.length) {
    loadMoreBtn.style.display = 'none';
  }

  return newCards;
};

const scrollToFirstNewCard = (newCards) => {
  if (newCards.length > 0) {
    setTimeout(() => {
      newCards[0].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 200);
  }
};

const loadMoreProjects = (isInitialLoad = false) => {
  const newCards = renderProjectsBatch();

  if (!isInitialLoad) {
    scrollToFirstNewCard(newCards);
  }
};

// Перше завантаження без скролу
loadMoreProjects(true);

// Клік по кнопці
loadMoreBtn.addEventListener('click', () => loadMoreProjects());
