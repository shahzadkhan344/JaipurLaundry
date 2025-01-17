// Toggle the navbar visibility on mobile
document.getElementById('navbar-toggle').addEventListener('click', function () {
    const navbarItems = document.querySelector('.navbar-items');
    navbarItems.classList.toggle('show');
});






const slider = document.querySelector('.slider');
const container = document.querySelector('.slider-container');
const afterImage = document.querySelector('.after-image');
let isDragging = false;

const handleDrag = (e) => {
    if (!isDragging) return;
    const containerRect = container.getBoundingClientRect();
    let offsetX = e.touches ? e.touches[0].pageX : e.pageX;
    offsetX -= containerRect.left;
    offsetX = Math.max(0, Math.min(offsetX, containerRect.width));
    const percentage = (offsetX / containerRect.width) * 100;
    slider.style.left = `${percentage}%`;
    afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
};

const stopDrag = () => {
    isDragging = false;
};

slider.addEventListener('mousedown', () => (isDragging = true));
slider.addEventListener('touchstart', () => (isDragging = true));
window.addEventListener('mouseup', stopDrag);
window.addEventListener('touchend', stopDrag);
window.addEventListener('mousemove', handleDrag);
window.addEventListener('touchmove', handleDrag);













const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const totalSlides = slideElements.length;
let currentIndex = 0;

// Function to trigger animations for the current slide
function triggerAnimations(slide) {
    const text = slide.querySelector('h5.text');
    const text2 = slide.querySelector('h1.text2');
    const buttons = slide.querySelectorAll('.button-container button');

    // Reset animations by removing and re-adding them
    text.style.animation = 'none';
    text2.style.animation = 'none';
    buttons.forEach(button => button.style.animation = 'none');

    // Reapply animations with a slight delay
    setTimeout(() => {
        text.style.animation = 'flipIn 1s ease-in-out forwards';
        text2.style.animation = 'growIn 1s ease-out forwards 0.5s';
        buttons[0].style.animation = 'slideInLeft 1s ease-in-out forwards 1s';
        buttons[1].style.animation = 'slideInRight 1s ease-in-out forwards 1s';
    }, 10);
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
    updateSlidePosition();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to the last slide
    updateSlidePosition();
}

// Function to update the slide position and trigger animations
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    triggerAnimations(slideElements[currentIndex]); // Trigger animations for the current slide
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 5000);

// Trigger animations for the first slide on page load
triggerAnimations(slideElements[currentIndex]);








// JavaScript for Scroll to Top Button
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Show the button when scrolling down
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Show when scrolled 300px down
            scrollToTopButton.classList.add("visible");
        } else {
            scrollToTopButton.classList.remove("visible");
        }
    });

    // Scroll to top smoothly on button click
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
        });
    });
});
