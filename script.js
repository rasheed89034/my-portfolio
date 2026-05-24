// script.js
const textElement = document.getElementById('typewriter-text');
const phrases = ["Rasheed Ahmad", "ML Engineer", "Web Developer"];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Delete character
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add character
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // Typing speed logic
    let typeSpeed = isDeleting ? 40 : 100 + Math.random() * 50;

    // Wait at the end of word
    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
    }
    // Switch to next word when deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start the animation
typeEffect();