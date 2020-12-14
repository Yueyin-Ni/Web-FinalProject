const navLinks = document.querySelectorAll('nav b'),
        sliderRects = document.querySelectorAll('.rect');

    function scrollSection(section) {

      window.scroll({
        top: document.getElementById(section).offsetTop,
        behavior: 'smooth' 
      });
    }

    function animateStuff() {
      sliderRects.forEach(function(sliderRect) {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderRect.offsetHeight / 2;
        const imageBottom = sliderRect.offsetTop + sliderRect.offsetHeight;
        const isHalfShown = slideInAt > sliderRect.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
          sliderRect.classList.add('active');
        } else {
          sliderRect.classList.remove('active');
        }
      });
    }

    navLinks.forEach(function(element) {
      element.addEventListener('click', function(e) {
        e.preventDefault();

        let target = this.dataset.link;

        scrollSection(target);
      });
    });

    window.addEventListener('scroll', function() {
      animateStuff();
    });


////


function correctA(){
  document.getElementById("answerCorrectA").src = "assets/quiz1right.png";
}

function wrongB(){
  document.getElementById("answerWrongB").src = "assets/quiz1false.png";
}


function correctC(){
  document.getElementById("answerCorrectC").src = "assets/quizright.png";
}

function wrongD(){
  document.getElementById("answerWrongD").src = "assets/quizfalse.png";
}


function correctE(){
  document.getElementById("answerCorrectE").src = "assets/quizfalse.png";
}

function wrongF(){
  document.getElementById("answerWrongF").src = "assets/quizright.png";
}




/////

// left
const left = document.getElementById('left');
left.addEventListener('mouseenter', () => {
  left.src = "assets/timegif.gif";
});
left.addEventListener('mouseleave', () => {
    left.src = "assets/time.jpg";
});
// left.addEventListener('click', () => {
//   left.src = "https://vimeo.com/489073672";});

// middle
const middle = document.getElementById('middle');
middle.addEventListener('mouseenter', () => {
  middle.src = "assets/play.gif";
});
middle.addEventListener('mouseleave', () => {
    middle.src = "assets/play.jpg";
});

// right
const right = document.getElementById('right');
right.addEventListener('mouseenter', () => {
  right.src = "assets/hide.gif";
});
right.addEventListener('mouseleave', () => {
    right.src = "assets/hide.jpg";
});



/////
function start(){
  scrollSection(navLinks[1].dataset.link);
}

function next1(){
  scrollSection(navLinks[2].dataset.link);
}

function next2(){
  scrollSection(navLinks[3].dataset.link);
}

function next3(){
  scrollSection(navLinks[4].dataset.link);
}

function next4(){
  scrollSection(navLinks[5].dataset.link);
}
