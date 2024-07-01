





// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Track cursor movement (optional)
const cursor = document.querySelector(".cursor");
document.querySelector("#main").addEventListener("mousemove", function(event) {
    gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.5,
        ease: "power2.out"
    });
});

// Scroll to #contact section on button click
const handleButtonClick = () => {
    const button = document.querySelector(".contactbtn button");

    button.addEventListener("click", function() {
        window.location.href = 'contact.html'; // Replace with your actual contact page URL
    });
}

handleButtonClick();
