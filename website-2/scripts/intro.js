let imageNumber = 1;
let isSticky = false;

window.setInterval(() => changeImages(), 10000);

function changeImages() {
  let header = document.getElementById(`header-${imageNumber}`);
  header.style.display = 'none';
  imageNumber = imageNumber === 1 ? 2 : imageNumber === 2 ? 3 : 1;
  header = document.getElementById(`header-${imageNumber}`);
  header.style.display = 'block';
}

/**
 * Checks for scroll and makes header sticky and updates appearance if user scrolls further
 * Adds additional bool check to not constantly affect DOM unless needed
 */
document.addEventListener('scroll', () => {
  if (!isSticky && window.scrollY > 64) {
    isSticky = true;
    document.getElementById('header').classList.add('sticky-header');
  } else if (isSticky && window.scrollY < 64) {
    isSticky = false;
    document.getElementById('header').classList.remove('sticky-header');
  }
});
