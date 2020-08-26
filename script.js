const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const nav = [nav1, nav2, nav3, nav4, nav5];

function updateAllNavElements(oldValue, newValue) {
  nav.forEach((item, i) => {
    item.classList.contains(`slide-${oldValue}-${i+1}`)
      ? item.classList.replace(
          `slide-${oldValue}-${i+1}`,
          `slide-${newValue}-${i+1}`
        )
      : item.classList.add(`slide-${newValue}-${i+1}`);
  });
}

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.remove('overlay-slide-left');
    overlay.classList.add('overlay-slide-right');
    updateAllNavElements('out', 'in');
  } else {
    overlay.classList.remove('overlay-slide-right');
    overlay.classList.add('overlay-slide-left');
    updateAllNavElements('in', 'out');
  }
}

//Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);
