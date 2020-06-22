const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector('#close-icon');

const menu = document.querySelector('.nav-bar');

hamburgerIcon.onclick = () => {
    console.log("hamburger was clicked");
    menu.classList.add('active');
    hamburgerIcon.classList.add('inactive');
    closeIcon.classList.remove('inactive');
}

closeIcon.onclick = () => {
    console.log("cross was clicked");
    menu.classList.remove('active');
    closeIcon.classList.add('inactive');
    hamburgerIcon.classList.remove('inactive');
}
    