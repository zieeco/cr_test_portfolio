const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';
const htmlContent = `<img class="x-menu" src="media/svg/Icon-Cancel.svg" alt="cancel image">
  <ul class="menu-list-item">
  <li class="portfolio"><a class="menu-list-items" href="#portfolio">Portfolio</a></li> <hr>
  <li class="about"><a class="menu-list-items" href="#about-me">About</a></li> <hr>
  <li class="contact"><a class="menu-list-items" href="#contact">Contact</a></li> <hr>
</ul>`;
menuDiv.innerHTML = htmlContent;
document.body.appendChild(menuDiv);

const cancelImage = menuDiv.querySelector('.x-menu');
cancelImage.src = 'media/svg/Icon-Cancel.svg';
cancelImage.className = 'x-menu';
cancelImage.alt = 'cancel image';

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
});

const menuIcon = document.querySelector('.menu-bars i');
menuIcon.style.cursor = 'pointer';

menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
});
