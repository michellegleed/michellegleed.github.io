
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

        let imgContainerHtml = ""
        const imgToShow = this.images[this.index];

        // for (let i=0; i < imgToShow.length; i++) {
        //     imgContainerHtml += `<img class="work-item-img img-size-${imgToShow[i].size}" src="${imgToShow[i].src}" alt="${this.name}." />`
        // }    
        
        for (let i=0; i < imgToShow.length; i++) {
            imgContainerHtml += `<img class="work-item-img" src="${imgToShow[i]}" alt="${this.name}." />`
        }

        console.log("new inner html is: ", imgContainerHtml);

        // this.imageContainer.src = this.images[this.index];
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

// const portfolioSlides = [
//     [
//         {
//             size: "desktop",
//             src: "images/work-images/portfolio/index.png"
//         }
//     ], 
//     [
//         {
//             size: "ipad",
//             src: "images/work-images/portfolio/ipad-bio.png"
//         },
//         {
//             size: "ipad",
//             src: "images/work-images/portfolio/ipad-contact.png"
//         }
//     ],
//     [
//         {
//             size: "mob",
//             src: "images/work-images/portfolio/mob-index.png"
//         },
//         {
//             size: "mob",
//             src: "images/work-images/portfolio/mob-menu.png"
//         }
//     ],
//     [
//         {
//             size: "ipad",
//             src: "images/work-images/portfolio/ipad-work.png"
//         },
//         {
//             size: "ipad",
//             src: "images/work-images/portfolio/ipad-work2.png"
//         },
//     ]
// ];

const portfolioTextItems = [
    "<p>The task was to create this portfolio website to showcase the projects that we complete throughout the SheCodes course. We were required to have a minimum of two pages in our website and to use media queries in this project.</p>",
    "<p>I sketched out wireframes on paper and then designed my portfolio in AdobeXD. I used several of my own photographs throughout the site. I styled the pages using Flexbox and CSS grid.</p>",
    "<p>I created a simple menu for mobile-sized screens using JavaScript.</p>", 
    "<p>I added arrow button icons and wrote JavaScript to dynamically change the images and text for each project, and to update the counter so the user could see which section of the project was in view and the number of sections left.</p>"
]

let portfolio = new Project("portfolio", portfolioImageContainer, portfolioTextContainer, portfolioSlideCounter, portfolioSlides, portfolioTextItems);

portfolio.showSlides();


const weatherImageContainer = document.getElementById("weather-slides");
const weatherTextContainer = document.getElementById("weather-text");const weatherSlideCounter = document.getElementById("weather-slide-counter");

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


let weather = new Project("python weather application", weatherImageContainer, weatherTextContainer, weatherSlideCounter, weatherSlides, weatherTextItems);

weather.showSlides();

console.log("portfolio: ", portfolio);
console.log("weather: ", weather);