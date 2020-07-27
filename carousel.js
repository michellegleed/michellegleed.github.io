
class Project {
    constructor(imageContainer, textContainer, counterContainer, images, textItems) {
        this.index = 0
        this.imageContainer = imageContainer;
        this.textContainer = textContainer;
        this.counterContainer = counterContainer;
        this.images = images;
        this.textItems = textItems;
    }

    nextSlide() {
        if (this.index + 1 >= this.images.length) {
            this.index = 0;
        }
        else {
            this.index += 1 ;
        }
        this.showSlides();  
    }

    prevSlide() {
        if (this.index - 1 < 0) {
            this.index = this.images.length - 1;
        }
        else {
            this.index -= 1 ;
        }
        this.showSlides();
    }

    currentSlide(n) {
        this.index = n;
        this.showSlides();
    }

    showSlides() {
        this.imageContainer.src = this.images[this.index];
        this.textContainer.innerHTML = this.textItems[this.index];
        let counter = `${this.index + 1}/${this.images.length}`;
        this.counterContainer.innerHTML = counter;
    }  
}

const portfolioImageContainer = document.getElementById("portfolio-slides");
const portfolioTextContainer = document.getElementById("portfolio-text");
const portfolioSlideCounter = document.getElementById("portfolio-slide-counter");

const portfolioSlides = [
    "images/work-images/portfolio/index.png", 
    "images/work-images/portfolio/mob.png", 
    "images/work-images/portfolio/ipad.png",
    "images/work-images/portfolio/ipad2.png"
];

const portfolioTextItems = [
    "<p>The task was to create this portfolio website to showcase the projects that we complete throughout the SheCodes course. We were required to have a minimum of two pages in our website and to use media queries in this project.</p>",
    "<p>I created a simple menu for mobile-sized screens using javascript. I used CSS flexbox and CSS grid to style my pages.</p>"
]

let portfolio = new Project(portfolioImageContainer, portfolioTextContainer, portfolioSlideCounter, portfolioSlides, portfolioTextItems);

portfolio.showSlides();


const weatherImageContainer = document.getElementById("weather-slides");
const weatherTextContainer = document.getElementById("weather-text");const weatherSlideCounter = document.getElementById("weather-slide-counter");

const weatherSlides = [
    "images/work-images/weather/part1.png", 
    "images/work-images/weather/part2.png", 
    "images/work-images/weather/part3.png"
];

const weatherTextItems = [
    "<p>The task was to create a python program that could process a json file containing weather predictions and historical weather data.</p><p>Part 1 required us to extract the required predictions, format them to pass the tests, and output the formatted information into a new text file.</p>",
    "<p>Part 2 required the program to output graphs of the temperature readings and the incidence of particular weather events from json data containing historical weather measurements.</p>",
    "<p>Part 3 was an optional challenge which I chose to complete. It required the program to extract certain data from the json file, format the data and generate graphs and formatted text files.</p>"
];


let weather = new Project(weatherImageContainer, weatherTextContainer, weatherSlideCounter, weatherSlides, weatherTextItems)

weather.showSlides()

console.log("portfolio: ", portfolio)
console.log("weather: ", weather)

// let index = 0;

// showSlides(index, "portfolio");
// showSlides(index, "weather");

// Next/previous controls
// function nextSlide(project) {
    
//     if (index + 1 >= slides.length) {
//         index = 0;
//     }
//     else {
//         index += 1 ;
//     }
//     console.log("current index = ", index);
//     showSlides(index, projectImageContainer);  
// }

// function prevSlide(project) {
//     if (index - 1 < 0) {
//         index = slides.length - 1;
//     }
//     else {
//         index -= 1 ;
//     }
//     console.log("current index = ", index);
//     showSlides(index, project);
// }

// // Thumbnail image controls
// function currentSlide(n, project) {
//   showSlides(index = n, project);
// }

// function showSlides(n, imageContainer, textContainer) {
//         imageContainer.src = slides[n];
// }
    
    

//   var i;
  
//   var dots = document.getElementsByClassName("dot");

//   for (let i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   dots[index-1].className += " active";
// } 