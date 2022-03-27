let headerNumber = 1;
let isSticky = false;
let yearsToggled = false;
const windowHeight = window.innerHeight;

window.setInterval(() => changeImages(), 10000);

/**
 * Cycles through a timer and adds/removes the specific header
 */
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
  //*Sticky header logic
  if (!isSticky && window.scrollY > 64) {
    isSticky = true;
    document.getElementById('header').classList.add('sticky-header');
  } else if (isSticky && window.scrollY < 64) {
    isSticky = false;
    document.getElementById('header').classList.remove('sticky-header');
  }

  if (isScrolledIntoView('years-experience') && !yearsToggled) {
    yearsToggled = true;
    incrementYears();
  }
});

/**
 * Scrolls back to the top on user click
 */
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * Checks if passed element is within a certain amount of screen bounds
 * @param elementName
 */
function isScrolledIntoView(elementName) {
  const inBoundCheck = window.scrollY + windowHeight;
  const element = document.getElementById(elementName).getBoundingClientRect();
  const elementPosition = window.scrollY + element.top;
  return elementPosition > window.scrollY && elementPosition < inBoundCheck;
}

/**
 * Increments the years on the display from 0 to 60
 */
function incrementYears() {
  let current = 0;
  const yearsCounter = document.getElementById('years-experience');

  const step = function () {
    current++;
    yearsCounter.innerHTML = current;
    if (current < 60) setTimeout(step, 75);
  };

  setTimeout(step, 75);
}
