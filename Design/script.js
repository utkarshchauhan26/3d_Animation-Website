document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".dynamic-text");
    const text = "Innovation Begins Here";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust speed
        }
    }

    typeEffect();
});
