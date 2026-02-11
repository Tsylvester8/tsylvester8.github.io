
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('pubCarousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');

  if (!carousel || !slides.length || !dots.length) return;

  /* 1️⃣ Initial active dot */
  dots[0].classList.add('active');

  /* 2️⃣ Click dots → scroll */
  dots.forEach((dot, index) => {
    dot.setAttribute('tabindex', '0'); // keyboard focus (optional)

    dot.addEventListener('click', () => {
      carousel.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth',
      });
    });
  });

  /* 3️⃣ Update dots on scroll (throttled) */
  let ticking = false;

  carousel.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let activeIndex = 0;
        let minDistance = Infinity;

        slides.forEach((slide, index) => {
          const distance = Math.abs(
            carousel.scrollLeft - slide.offsetLeft
          );
          if (distance < minDistance) {
            minDistance = distance;
            activeIndex = index;
          }
        });

        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === activeIndex);
        });

        ticking = false;
      });

      ticking = true;
    }
  });
});

// Function to toggle the visibility of the timeline information
function toggleInfo(id) {
  // Get all timeline info elements
  const allInfo = document.querySelectorAll('.timeline-info');
  
  // Loop through each .timeline-info element and close it
  allInfo.forEach((info) => {
    if (info.id !== id) {  // If the element is not the one being toggled
      info.classList.remove('active');  // Close it
    }
  });

  // Now toggle the clicked one (open or close it)
  const infoToToggle = document.getElementById(id);
  infoToToggle.classList.toggle('active');
}

// Function to close the timeline information
function closeInfo(id) {
  const info = document.getElementById(id);
  info.classList.remove('active'); // Hide the content
}

// mobile sidebar toggle
function showSidebar() {
  const sidebar = document.querySelector('.pill-nav');
  sidebar.style.display = 'flex'; // Show the sidebar
}

function hideSidebar() {
  const sidebar = document.querySelector('.pill-nav');
  sidebar.style.display = 'none'; // Hide the sidebar
}



// // Dark Mode Toggle
// document.getElementById("darkModeToggle").addEventListener("click", () => {
//   document.documentElement.classList.toggle("dark");
// });


// const themeBtn = document.querySelector('.theme-toggle');
// const currentTheme = localStorage.getItem('theme') || 'light';

// if (currentTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

// themeBtn.addEventListener('click', () => {
//     let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
// });

// 

// function scrollToSlide(index) {
//   if (!carousel || !slides[index]) return;

//   carousel.scrollTo({
//     left: slides[index].offsetLeft,
//     behavior: 'smooth',
//   });
// }

// carousel.addEventListener('scroll', () => {
//   let closestIndex = 0;
//   let closestDistance = Infinity;

//   slides.forEach((slide, index) => {
//     const distance = Math.abs(carousel.scrollLeft - slide.offsetLeft);
//     if (distance < closestDistance) {
//       closestDistance = distance;
//       closestIndex = index;
//     }
//   });

//   dots.forEach((dot, i) => {
//     dot.classList.toggle('active', i === closestIndex);
//   });
// });


// const carousel = document.getElementById('pubCarousel');
// const slides = document.querySelectorAll('.carousel-slide');
// const dots = document.querySelectorAll('.dot');

// carousel.addEventListener('scroll', () => {
//   const slideWidth = slides[0].offsetWidth; // Get width of first slide
//   const scrollIndex = Math.round(carousel.scrollLeft / slideWidth); // Round to nearest slide
//   dots.forEach((dot, index) => {
//     dot.classList.toggle('active', index === scrollIndex);  // Update active dot
//   });
// });

// function scrollToSlide(index) {
//   const slideWidth = slides[0].offsetWidth;
//   carousel.scrollTo({
//     left: index * slideWidth,
//     behavior: 'smooth',
//   });
// }

// function scrollToSlide(index) {
//   const slideWidth = slides[0].offsetWidth; // Move inside to be dynamic
//   carousel.scrollTo({
//     left: index * slideWidth,
//     behavior: 'smooth',
//   });
// }

// // Change this in scripts.js
// themeBtn.addEventListener('click', () => {
//     document.documentElement.classList.toggle('dark'); // Uses the class your CSS expects
//     const isDark = document.documentElement.classList.contains('dark');
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
// });
