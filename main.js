const menuDivContainer = document.createElement('div');
menuDivContainer.className = 'menu-container';
const bottomLine = document.createElement('div');
bottomLine.className = 'bottom-line';
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';
menuDivContainer.style.display = 'none';
const htmlContent = `<img class="x-menu" src="media/svg/Icon-Cancel.svg" alt="cancel image">
  <ul class="menu-list-item">
  <li class="portfolio"><a class="menu-list-items" href="#intro">Portfolio</a></li> <hr>
  <li class="about"><a class="" href="#about-me">About</a></li> <hr>
  <li class="contact"><a class="" href="#contact">Contact</a></li> <hr>
</ul>`;
menuDiv.innerHTML = htmlContent;
menuDivContainer.appendChild(menuDiv);
menuDivContainer.appendChild(bottomLine);
document.body.appendChild(menuDivContainer);

const cancelImage = menuDiv.querySelector('.x-menu');
cancelImage.src = 'media/svg/Icon-Cancel.svg';
cancelImage.className = 'x-menu';
cancelImage.alt = 'cancel image';

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  menuDivContainer.style.display = 'none';
});

const menuIcon = document.querySelector('.menu-bars i');
menuIcon.style.cursor = 'pointer';

menuIcon.addEventListener('click', () => {
  menuDivContainer.style.display = 'flex';
  menuDiv.style.display = 'flex';
});

const menuListItems = document.querySelectorAll('.menu-list-items');
menuListItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    menuDivContainer.style.display = 'none';
  });
});
