function toggleNavigation() {
  const details = document.querySelector('details.navigation');

  if (window.innerWidth >= 1024) {
    details.open = true;
  } else {
    details.open = false;
  }
}

toggleNavigation();

window.addEventListener('resize', toggleNavigation);