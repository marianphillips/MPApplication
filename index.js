const header = document.querySelector('header');
window.addEventListener('scroll', function() {
  header.classList.toggle('navbar', window.scrollY > 0)
  if (window.scrollY > 0) {
    header.innerHTML = '<h3 class = \'navMe\'>Marian Phillips</h3><ul class = \'nav\'><li><a href=\'#index\'>Home</a></li><li><a href=\'#why\'>Why Coding</a></li><li><a href=\'#fandc\'>Why F&C</a></li><li><a href=\'#interests\'>Interests</a></li><li><a href=\'#links\'>Contact</a></li></ul>';
  }
  else if (window.scrollY == 0) {
    header.innerHTML = '';
  }
  })

const images = document.querySelector('.carousel2');
const buttons = document.querySelectorAll('.button');
const numberOfImages = document.querySelectorAll('.carousel2 img').length;
let imageIndex = 1;
let translateX = 0;
let interestsText = document.querySelector('.interestsText');


buttons.forEach(button => {
  button.addEventListener('click', event => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 400;
      }
    }
    else { 
    if (imageIndex !== numberOfImages) {
      imageIndex++;
      translateX -= 400; 
    }
   }
   images.style.transform = `translateX(${translateX}px)`;

   if (imageIndex == 1) {
    interestsText.innerHTML = '<h3>Circus</h3><p>My interest in Circus began in 2012 with a trapeze class and I have continued with aerial skills ever since. I completed a 4-month full time Circus course in 2017 and the photo shows an image of our final performance. I am on the right in yellow.<p>'
  }
  else if (imageIndex == 2) {
    interestsText.innerHTML = '<h3>Spanish</h3><p>I lived in Granada, Spain for one year as part of my University degree. Here, I learnt Spanish and still occasionally take online lessons.<p>'
   }
  else if (imageIndex == 3) {
    interestsText.innerHTML = '<h3>Netball</h3><p>I have played since school and continue to play in various recreational leagues in London.<p>'
    }
  else if (imageIndex == 4) {
    interestsText.innerHTML = '<h3>Skiing</h3><p>I moved to Whistler, Canada for 2 years on a temporary visa so I could experience living in another country. It was here where I learnt how to ski, and eventually became a CSIA Level 1 Instructor.<p>'
      }
  else if (imageIndex == 5) {
    interestsText.innerHTML = '<h3>Music</h3><p>I play piano (badly) and I sing in a choir.<p>'
  }
  });
 });


