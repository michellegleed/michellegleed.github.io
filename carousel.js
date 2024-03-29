
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

        if (imgToShow.length > 1) {
            for (let i = 0; i < imgToShow.length; i++) {
                imgContainerHtml += `<img class="work-item-img double-img" src="${imgToShow[i]}" alt="${this.name}." />`
            }
        } else {
            imgContainerHtml = `<img class="work-item-img" src="${imgToShow[0]}" alt="${this.name}." />`
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
    "<h4 class='left-align'>The Stack</h4><br/><ul class='work-item-list'><li>The API was written in Python using Django Rest Framework</li><li>The Front End was written using React JS</li><li>The database was PostgreSQL</li><li>This project is deployed to Heroku</li></ul>",
    "<p>I used Django Signals to create a location-based news feed that automatically generates content whenever one of the following activities occured... <ul class='work-item-list'><li>Project created</li><li>Progress update added to an existing project</li><li>A funding milestone was reached - 25%, 50%, 75% and 100% of the project goal</li><li>A project was within five days of it's closing date</li></ul></p>",
    "<p>On the profile page, users can view their pledge history, update their username and bio, and change their location.</p> <p>As this website shows local projects, changing a user's location will change the projects in their news feed and the 'Browse by Category' page.</p>",
    "<p>I added a 'snoop' button to the news feed which allows users to browse projects by location. This allows them to see open projects posted to locations other than the location they've set in their profile.</p>"
];


let crelo = new Project("Crelo Application", creloImageContainer, creloTextContainer, creloSlideCounter, creloSlides, creloTextItems);

crelo.showSlides();


const bucksImageContainer = document.getElementById("bucks-slides");
const bucksTextContainer = document.getElementById("bucks-text"); const bucksSlideCounter = document.getElementById("bucks-slide-counter");

const bucksSlides = [
    ["images/work-images/bucks/part1.png"],
    ["images/work-images/bucks/part2.png"],
    ["images/work-images/bucks/part3.png"],
    ["images/work-images/bucks/part4.png"],
    ["images/work-images/bucks/part5.png"]
];


const bucksTextItems = [
    "<p>This was a group project. The task was to create a web app that splits income into different accounts or ‘buckets’ according to designated percentages pre-defined by the user.</p><p> Every transaction is saved to the user’s transaction history list. Buckets can be added, updated, and deleted by the user, and buckets can have their proportion of the funds further split into child buckets.</p>",
    "<h4  class='left-align'>The Stack</h4><ul class='work-item-list'><li>The API was written in Python using Django Rest Framework</li><li>The Front End was written using React JS</li><li>The database was PostgreSQL</li><li>This project was deployed to Heroku</li></ul>",
    "<h4 class='left-align'>API Features</h4><ul class='work-item-list'><li>A recursive serialiser was used to serve nested JSON with children buckets listed inside the parent bucket object</li><li>Transaction model has a receipt field which is a JSON field. This allows us to do all the calculations on the front end before the API stores the transaction instance (instead of storing the instance first, running the calculations and sending this info back to front-end to be displayed).</li></ul><p>This API design resulted in a faster, more responsive front-end and a better experience for the user.</p>",
    "<h4 class='left-align'>Front-End Features</h4><ul class='work-item-list'><li>User can edit all their buckets at once and the app will check that all bucket percentages add to 100% before posting the transaction record to the API</li><li>User can add icons to buckets to help with quick identification</li><li>Shows a list of all saved transactions by date - user can view the details of any transaction and delete the record if they choose</li><li> Menu links change based on whether user is/isn’t logged in</li></ul>",
    "<p>The client needed to be able assign her regular monthly expenses to the relevant buckets. These expenses were then used to calculate the minimum required amount that should be put into each bucket to cover her expenses.</p><p>Upon entering a value into the income field, funds are automatically distributed into the buckets and a warning message displays if the amount in the bucket is less than the minimum required amount.</p>"
];


let bucks = new Project("Bucks Buckets Application", bucksImageContainer, bucksTextContainer, bucksSlideCounter, bucksSlides, bucksTextItems);

bucks.showSlides();


const newsImageContainer = document.getElementById("news-slides");
const newsTextContainer = document.getElementById("news-text"); const newsSlideCounter = document.getElementById("news-slide-counter");

const newsSlides = [
    ["images/work-images/news/part1.png"],
    ["images/work-images/news/part2.png"],
    ["images/work-images/news/part3.png"]
];


const newsTextItems = [
    "<p>The task was to create a newspaper app using the Django framework. This was my first introduction to Django.</p>",
    "<h4 class='left-align'>Django Features</h4><ul class='work-item-list'> <li>Category View filters stories by categories and can either show all stories in a user’s list of favourite categories or show all stories from a single category</li> <li>Used Django templating syntax to create web pages</li> <li>Wrote views to interact with the templates and SQL database</li> <li>User must be logged in to publish a story</li> <li>Used Django Authentication System (django.contrib.auth) to authenticate users</li></ul>",
    "<h4 class='left-align'>User Centered Features</h4><ul class='work-item-list'> <li>Users can edit their followed categories list</li> <li>Update their profile page</li> <li>Publish a story</li></ul>"
];


let news = new Project("She Codes News Application", newsImageContainer, newsTextContainer, newsSlideCounter, newsSlides, newsTextItems);

news.showSlides();


const creloIOSImageContainer = document.getElementById("crelo-ios-slides");
const creloIOSTextContainer = document.getElementById("crelo-ios-text");
const creloIOSSlideCounter = document.getElementById("crelo-ios-slide-counter");

const creloIOSSlides = [
    ["images/work-images/crelo-ios/news1.png", "images/work-images/crelo-ios/project.png"],
    ["images/work-images/crelo-ios/news2.png", "images/work-images/crelo-ios/profile.png"],
    ["images/work-images/crelo-ios/create.png", "images/work-images/crelo-ios/pledge.png"]
];


const creloIOSTextItems = [
    "<p>The task was to create an iOS13 app to interact with my Crelo crowdfunding API. I had used Swift and UIKit before, but I had to learn the SwiftUI framework to create this app.</p> <p>In terms of design, the app was to look as similar as possible to the React web app I had recently built whilst conforming to Apple's Human Interface Guidelines. It also needed to support the same features as the Crelo React app.</p>",
    "<p>I incorporated tab bar navigation to allow the user to easily switch between different parts of the app.</p><p>I custom-coded a horizontal scroll navigation bar containing buttons at top of screen to enable fast navigation to pages within each tab section.</p>",
    "<p>The iOS app was designed with SwiftUI to mimic the appearance of the mobile version of my Crelo React web app. Keeping the design similar across both apps helped to establish a brand and recognisable theme for Crelo. It also allowed me to focus on learning how to use SwiftUI to achieve a pre-determined design.</p>"
];


let creloIOS = new Project("Crelo iOS Application", creloIOSImageContainer, creloIOSTextContainer, creloIOSSlideCounter, creloIOSSlides, creloIOSTextItems);

creloIOS.showSlides();


const aussieFitImageContainer = document.getElementById("aussieFit-slides");
const aussieFitTextContainer = document.getElementById("aussieFit-text"); const aussieFitSlideCounter = document.getElementById("aussieFit-slide-counter");

const aussieFitSlides = [
    ["images/work-images/aussie-fit/part2a.png", "images/work-images/aussie-fit/part2b.png"],
    ["images/work-images/aussie-fit/part1a.png", "images/work-images/aussie-fit/part1b.png"],
    ["images/work-images/aussie-fit/part3.png"],
    ["images/work-images/aussie-fit/part4.png"]
];


const aussieFitTextItems = [
    "<p>The task was to create an attendance app for Curtin's aussieFit study. Participants were put into groups and required to attend workshops and exercise sessions at WAFL football clubs in Perth. The academics running the project needed a simple, secure way for the participants to sign in to each session.</p>",
    "<h4>Features</h4><ul><li>Participants scan a QR code to reach the sign-in page for their team</li><li>Attendance can only be registered from one hour prior to a class's start time</li><li>API automatically marks participants as absent if their attendance is not recorded by the end of the session</li><li>Admin dashboard to create and manage groups, manage participants, schedule workshops, and add/edit screening questions</li><li>Participants can only see the attendance list for their own group to ensure privacy for participants of other groups. This web app is also password protected.</li></ul>",
    "<p>The academics needed to download the attendance data as part of their analysis. I created a route on the backend that uses Python's CSV library to process the attendance data into a csv file.</p>",
    "<p>I created a basic dashboard for the academics to use to add teams of participants, schedule, edit, and delete classes and edit participants' attendance manually if required.</p>"
];


let aussieFit = new Project("Python AussieFit Application", aussieFitImageContainer, aussieFitTextContainer, aussieFitSlideCounter, aussieFitSlides, aussieFitTextItems);

aussieFit.showSlides();
