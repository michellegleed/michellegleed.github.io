
class Project {
    constructor(name, imageContainer, textContainer, counterContainer, images, textItems) {
        this.index = 0;
        this.name = name;
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
            this.index += 1;
        }
        this.showSlides();
    }

    prevSlide() {
        if (this.index - 1 < 0) {
            this.index = this.images.length - 1;
        }
        else {
            this.index -= 1;
        }
        this.showSlides();
    }

    currentSlide(n) {
        this.index = n;
        this.showSlides();
    }

    showSlides() {

        let imgContainerHtml = ""
        const imgToShow = this.images[this.index];


        for (let i = 0; i < imgToShow.length; i++) {
            imgContainerHtml += `<img class="work-item-img" src="${imgToShow[i]}" alt="${this.name}." />`
        }

        console.log("new inner html is: ", imgContainerHtml);

        this.textContainer.innerHTML = this.textItems[this.index];
        this.imageContainer.innerHTML = imgContainerHtml;

        let counter = `${this.index + 1}/${this.images.length}`;
        this.counterContainer.innerHTML = counter;
    }
}

const portfolioImageContainer = document.getElementById("portfolio-slides");
const portfolioTextContainer = document.getElementById("portfolio-text");
const portfolioSlideCounter = document.getElementById("portfolio-slide-counter");

const portfolioSlides = [
    ["images/work-images/portfolio/index.png"],
    ["images/work-images/portfolio/ipad-bio.png", "images/work-images/portfolio/ipad-contact.png"],
    ["images/work-images/portfolio/mob-index.png", "images/work-images/portfolio/mob-menu.png"],
    ["images/work-images/portfolio/ipad-work.png", "images/work-images/portfolio/ipad-work2.png"]
];


const portfolioTextItems = [
    "<p>The task was to create this portfolio website to showcase the projects that we complete throughout the SheCodes course.</p> <p>We were required to have a minimum of two pages in our website and to use media queries in this project.</p>",
    "<p>I sketched out wireframes on paper and then designed my portfolio in AdobeXD.</p> <p>I used several of my own photographs throughout the site.</p> <p>I styled the pages using Flexbox and CSS grid.</p>",
    "<p>I created a simple menu for mobile-sized screens using JavaScript.</p>",
    "<p>I added arrow button icons and used JavaScript to dynamically change the images and text for each project, and to update the counter so the user can see which section of the project is in view and the number of sections left.</p>"
]

let portfolio = new Project("Portfolio", portfolioImageContainer, portfolioTextContainer, portfolioSlideCounter, portfolioSlides, portfolioTextItems);

portfolio.showSlides();


const weatherImageContainer = document.getElementById("weather-slides");
const weatherTextContainer = document.getElementById("weather-text"); const weatherSlideCounter = document.getElementById("weather-slide-counter");

const weatherSlides = [
    ["images/work-images/weather/part1.png"],
    ["images/work-images/weather/part2.png"],
    ["images/work-images/weather/part3.png"]
];


const weatherTextItems = [
    "<p>The task was to create a python program that could process a json file containing weather predictions and historical weather data.</p><p>Part 1 required us to extract the required predictions, format them to pass the tests, and output the formatted information into a new text file.</p>",
    "<p>Part 2 required the program to output graphs of the temperature readings and the incidence of particular weather events from json data containing historical weather measurements.</p>",
    "<p>Part 3 was an optional challenge which I chose to complete. It required the program to extract certain data from the json file, format the data and generate graphs and formatted text files.</p>"
];


let weather = new Project("Python Weather Application", weatherImageContainer, weatherTextContainer, weatherSlideCounter, weatherSlides, weatherTextItems);

weather.showSlides();

const creloImageContainer = document.getElementById("crelo-slides");
const creloTextContainer = document.getElementById("crelo-text"); const creloSlideCounter = document.getElementById("crelo-slide-counter");

const creloSlides = [
    ["images/work-images/crelo/part1.jpg"],
    ["images/work-images/crelo/part2a.png", "images/work-images/crelo/part2b.png"],
    ["images/work-images/crelo/part3.png"],
    ["images/work-images/crelo/part4.png"],
    ["images/work-images/crelo/part5.png"]
];


const creloTextItems = [
    "<p>The task was to design, build and deploy a crowdfunding website. Instead of creating a site that only catered to a particular type of project, I decided it could be useful to make it open to all kinds of projects organised by location (local shires), so users only see the projects happening in their local area.</p>",
    "<h3>The Stack</h3><br/><ul><li>The API was written in Python using Django Rest Framework</li><li>The Front End was written using React JS</li><li>The database was PostgreSQL</li><li>This project is deployed to Heroku</li></ul>",
    "<p>I used Django Signals to create a location-based news feed that automatically generates content whenever one of the following activities occured... <ul><li>Project created</li><li>Progress update added to an existing project</li><li>A funding milestone was reached - 25%, 50%, 75% and 100% of the project goal</li><li>A project was within five days of it's closing date</li></ul></p>",
    "<p>On the profile page, users can view their pledge history, update their username and bio, and change their location.</p> <p>As this website shows local projects, changing a user's location will change the projects in their news feed and the 'Browse by Category' page.</p>",
    "<p>I added a 'snoop' button to the news feed which allows users to browse projects by location. This allows them to see open projects posted to locations other than the location they've set in their profile.</p>"
];


let crelo = new Project("Crelo Application", creloImageContainer, creloTextContainer, creloSlideCounter, creloSlides, creloTextItems);

crelo.showSlides();
