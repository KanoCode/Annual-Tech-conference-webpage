const speakerContainer = document.getElementById('speaker-container');

const cardsArr = [
  {
    imgUrl: './assets/speakers/speaker-brad-hanks-.jpg',
    name: 'Bradley Cooper',
    position: 'one',
    credits: 'Hacker, influencer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere',
  },
  {
    imgUrl: './assets/supporting-brands/speaker-kano.jpg',
    name: 'Kanombola Kanombola',
    position: 'two',
    credits: 'Hacker, tech enthusiast, software engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere',
  },
  {
    imgUrl: './assets/supporting-brands/atanga-mungandi-speaker.jpg',
    position: 'one',
    name: 'Kanombola Kanombola',
    credits: 'Content Creator,UI/UX',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere',
  },
  {
    imgUrl: './assets/supporting-brands/speaker-manenga.jpg',
    position: 'two',
    name: 'Manenga Mungandi',
    credits: 'Content Creator, Software engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere',
  },
  {
    position: 'one',
    imgUrl: './assets/supporting-brands/Thomas.jpg',
    name: 'Thomas Simbule',
    credits: 'Content Creator,UI/UX',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere',
  },
  {
    imgUrl: './assets/supporting-brands/bright-speaker.jpg',
    name: 'Bright Bwalya',
    position: 'two',
    credits: 'Content Creator, Software engineer',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere',
  },
];

const speakerCardGenerator = (obj) => {
  const cardItem = document.createElement('li');
  cardItem.classList.add('speaker-card');
  cardItem.classList.add('container-fluid');
  cardItem.classList.add(`${obj.position}`);
  cardItem.innerHTML = `<div class="speaker-images">
  <img src="${obj.imgUrl}" alt="" />
</div>

<div class="speaker-description">
  <div class="speaker-title">
    <h3>${obj.name}</h3>
    <h4>${obj.credits}</h4>
    <span></span>
  </div>
  <p>
    ${obj.bio}
  </p>
</div> `;

  speakerContainer.appendChild(cardItem);
};

// on screens less than 768px
const mediaQuery = '(min-width: 768px)';
function dynamicHtmlForSpecicScreenGenerator() {
  const matched = this.matchMedia(mediaQuery).matches;
  if (matched) {
    speakerContainer.innerHTML = '';
    cardsArr.forEach((a) => {
      speakerCardGenerator(a);
    });
  } else {
    speakerContainer.innerHTML = '';
    speakerCardGenerator(cardsArr[0]);
    speakerCardGenerator(cardsArr[1]);
  }
}

function mediaQueryListener() {
  // matched or not
  const matched = this.matches;

  if (matched) {
    speakerContainer.innerHTML = '';
    cardsArr.forEach((a) => {
      speakerCardGenerator(a);
    });
  } else {
    speakerContainer.innerHTML = '';
    speakerCardGenerator(cardsArr[0]);
    speakerCardGenerator(cardsArr[1]);
  }
}

window.addEventListener('load', dynamicHtmlForSpecicScreenGenerator);

window.matchMedia(mediaQuery).addEventListener('change', mediaQueryListener);

// See More button

const showMoreBtn = document.querySelector('.show-more > button');
const btnIcon = document.querySelector('.show-more > button i');
const showMoreFunction = () => {
  speakerContainer.innerHTML = '';
  cardsArr.forEach((a) => {
    speakerCardGenerator(a);
  });

  showMoreBtn.textContent = 'See Less ';
  btnIcon.classList.toggle('fa-angle-up');
};

showMoreBtn.addEventListener('click', showMoreFunction);
