// On window load
window.onload = function () {
    // Get elements
    const challengeTag = document.getElementById("challengeTag");
    const miniDino = document.getElementById("miniDino");
    const miniDuck = document.getElementById("miniDuck");
    const miniDragon = document.getElementById("miniDragon");
    const anythingHeading = document.getElementById("mainHeading");

    // Add fadeInBounce animation through class to tag
    challengeTag.classList.add("bounceUp");
    challengeTag.style.opacity = "1"

    setTimeout(() => {
        miniDino.classList.add("bounceUpDownDino");
        miniDino.style.opacity = "1";

        miniDuck.classList.add("bounceUpDownDuck");

        miniDragon.classList.add("bounceUpDownDragon");
    }, 140);

    setTimeout(() => {
        anythingHeading.classList.add("rotate-in-down-left")
    }, 145);
}

const closeButtons = document.getElementsByClassName("close");
const modalWindow = document.getElementById("modalWindow");
const modalContent = document.getElementById("modalContent");
const whatLink = document.getElementById("whatLink");

whatLink.addEventListener("click", openModal);

function openModal(event) {
    // Prevent from reloading upon submission/clicking button
    event.preventDefault();
    // Add classes
    modalWindow.classList.add("active");
    // 0.14 second delay before adding classes
    setTimeout(() => {
        modalContent.classList.add("bounceIn");
    }, 140);
}
// On click run function
closeBtn.addEventListener("click", closeModal);

// Attach the closeModal function to each element
for (let i = 0; i < closeButtons.length; i++) {
    const close = closeButtons[i];
    close.addEventListener('click', closeModal);
}

// Attach an event listener to the document to handle clicks outside modalContent
modalWindow.addEventListener('click', function (event) {
    if (event.target !== modalContent && !modalContent.contains(event.target)) {
        closeModal();
    }
});

function closeModal() {
    modalContent.classList.remove("bounceIn");

    setTimeout(() => {
        modalContent.classList.add("slide-out-up");
    }, 50);

    modalContent.classList.remove("slide-out-up");

    setTimeout(() => {
        modalWindow.classList.remove("active");
    }, 180);

    // Open URL through JS method - Archived
    // window.open('https://github.com/beingsie/anything', '_blank', 'noopener');
}

// START Like button code

const likeButton = document.querySelector("#likeButton");


if (localStorage.getItem('liked') === 'true') {
    likeButton.classList.add("fa-solid");
    likeButton.classList.remove("fa-regular");
    likeButton.classList.add("liked")
}

likeButton.addEventListener("click", () => {
    let isLiked = likeButton.classList.toggle("fa-regular");
    likeButton.classList.toggle("fa-solid");
    likeButton.classList.toggle("liked")
    localStorage.setItem('liked', !isLiked);
});

// END Like button code