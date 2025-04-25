const projects = [
  {
    title: "Wallet webservice ",
    tech: "React, JavaScript, Node JS, Git",
    image1x: "../img/project3.jpg",
    image2x: "../img/project3@2x.jpg",
    alt: "Wallet webservice ",
    link: "#"
  },
  {
    title: "Green harvest webservice",
    tech: "React, JavaScript, Node JS, Git",
    image1x: "../img/project7.jpg",
    image2x: "../img/project7@2x.jpg",
    alt: "Green harvest webservice",
    link: "#"
  },
  {
    title: "English Exellence website",
    tech: "React, JavaScript, Node JS, Git",
    image1x: "../img/project5.jpg",
    image2x: "../img/project5@2x.jpg",
    alt: "English Exellence website",
    link: "#"
  },
  {
    title: "PORTFOLIO WEBSITE",
    tech: "HTML, SCSS, JavaScript",
    image1x: "../img/project4.jpg",
    image2x: "../img/project4@2x.jpg",
    alt: "Portfolio Website",
    link: "#"
  },
  {
    title: "TRAVEL AGENCY SITE",
    tech: "React, TypeScript, Tailwind",
    image1x: "../img/project6.jpg",
    image2x: "../img/project6@2x.jpg",
    alt: "Travel Agency Website",
    link: "#"
  },
  {
    title: "VYSHYVANKA VIBES LANDING PAGE",
    tech: "HTML, SCSS, JavaScript",
    image1x: "../img/project2.jpg",
    image2x: "../img/project2@2x.jpg",
    alt: "VYSHYVANKA VIBES LANDING PAGE",
    link: "#"
  },
  {
    title: "POWER PULSE WEBSERVICE",
    tech: "HTML, SCSS, JavaScript",
    image1x: "../img/project1.jpg",
    image2x: "../img/project1@2x.jpg",
    alt: "POWER PULSE WEBSERVICE",
    link: "#"
  },
  {
    title: "CHEGO JEWELRY WEBSITE",
    tech: "HTML, SCSS, JavaScript",
    image1x: "../img/project8.jpg",
    image2x: "../img/project8@2x.jpg",
    alt: "CHEGO JEWELRY WEBSITE",
    link: "#"
  },
  {
    title: "FRUITBOX ONLINE STORE",
    tech: "HTML, SCSS, JavaScript",
    image1x: "../img/project9.jpg",
    image2x: "../img/project9@2x.jpg",
    alt: "FRUITBOX ONLINE STORE",
    link: "#"
  },
  {
    title: "STARLIGHT STUDIO LANDING PAGE",
    tech: "HTML, SCSS, JavaScript",
    image1x: "../img/project10.jpg",
    image2x: "../img/project10@2x.jpg",
    alt: "STARLIGHT STUDIO LANDING PAGE",
    link: "#"
  },
];

let currentIndex = 0;
const batchSize = 2;

const projectsList = document.getElementById("projectsList");
const loadMoreBtn = document.getElementById("loadMoreBtn");

const createProjectCard = (project) => {
  const li = document.createElement("li");
  li.className = "project-card";
  li.innerHTML = `
    <img 
      src="${project.image1x}" 
      srcset="${project.image1x} 1x, ${project.image2x} 2x" 
      alt="${project.alt}" 
      class="project-img">
    <p class="project-tech">${project.tech}</p>
    <div class="link-visit">
      <h3 class="project-title">${project.title}</h3>
      <a href="${project.link}" class="project-btn">VISIT
        <svg class="icon-project" width="18" height="18">
          <use href="../img/icons.svg#arrow-visit"></use>
        </svg>
      </a>
    </div>
  `;
  setTimeout(() => li.classList.add("show"), 10);
  return li;
};

const loadMoreProjects = () => {
  const slice = projects.slice(currentIndex, currentIndex + batchSize);

  const newCards = []; // для прокрутки

  slice.forEach(project => {
    const card = createProjectCard(project);
    newCards.push(card);
    projectsList.appendChild(card);
  });

  currentIndex += batchSize;

  if (currentIndex >= projects.length) {
    loadMoreBtn.style.display = "none";
  }

  // Прокручуємо до першої нової картки
  if (newCards.length > 0) {
    setTimeout(() => {
      newCards[0].scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 200); // невелика затримка, щоб DOM встиг намалювати
  }
};

loadMoreBtn.addEventListener("click", loadMoreProjects);

// Перші проєкти при завантаженні
loadMoreProjects();
