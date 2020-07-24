
// const slideContainer = document.querySelector('#portfolio-slides');

const slideContainer = document.getElementById("portfolio-slides")

// console.log("slide conatiner = ", slideContainer)

const slides = ["images/work-images/portfolio.png", "images/work-images/pencils.jpg", "images/work-images/kid.jpeg"]

let index = 0;

showSlides(index);

// Next/previous controls
function nextSlide() {
    if (index + 1 >= slides.length) {
        index = 0
    }
    else {
        index += 1 
    }
    console.log("current index = ", index);
    showSlides(index);
  
}

function prevSlide() {
    if (index - 1 < 0) {
        index = slides.length - 1
    }
    else {
        index -= 1 
    }
    console.log("current index = ", index);
    showSlides(index);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(index = n);
}

function showSlides(n) {

    slideContainer.src = slides[n]

  var i;
  
  var dots = document.getElementsByClassName("dot");
  
//   for (i = 0; i < slides.length; i++) {
    //   slides[i].style.display = "none";
    
// }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
//   slides[slideIndex-1].style.display = "block";
  dots[index-1].className += " active";
} 