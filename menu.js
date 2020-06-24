const hamburgerIcon = document.querySelector("#hamburger-icon");
const closeIcon = document.querySelector('#close-icon');

const menu = document.querySelector('.nav-bar');

hamburgerIcon.onclick = () => {
    toggleIconClasses();
}

closeIcon.onclick = () => {
    toggleIconClasses();
}

toggleIconClasses = () => {
    menu.classList.toggle('active');
    hamburgerIcon.classList.toggle('inactive');
    closeIcon.classList.toggle('inactive');
}
    