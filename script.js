// Select all elements with the class '.animate-on-scroll'
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Function to check if element is in viewport
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle scroll event
const handleScroll = () => {
  animatedElements.forEach((element) => {
    if (isInViewport(element)) {
      element.classList.add('animate');
    }
  });
};

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger animation on page load if elements are in viewport
document.addEventListener('DOMContentLoaded', handleScroll);
