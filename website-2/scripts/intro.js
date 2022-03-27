let isSticky = false;
let headerNumber = 1;

window.setInterval(() => changeImages(), 10000);

function changeImages() {
  let header = document.getElementById(`header-${headerNumber}`);
  header.style.display = 'none';
  headerNumber = headerNumber === 1 ? 2 : headerNumber === 2 ? 3 : 1;
  header = document.getElementById(`header-${headerNumber}`);
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

/**
 * Scrolls back to the top on user click
 */
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
