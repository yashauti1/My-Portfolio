





// // Initialize Locomotive Scroll
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// // Track cursor movement (optional)
// const cursor = document.querySelector(".cursor");
// document.querySelector("#main").addEventListener("mousemove", function(event) {
//     gsap.to(cursor, {
//         x: event.clientX,
//         y: event.clientY,
//         duration: 0.5,
//         ease: "power2.out"
//     });
// });

// // Scroll to #contact section on button click
// const handleButtonClick = () => {
//     const button = document.querySelector(".contactbtn button");
    
//     button.addEventListener("click", function() {
//         window.location.href = 'contact.html'; // Replace with your actual contact page URL
//     });
// }

// handleButtonClick();

// const handleresumeClick=()=>{
//     const resBtn=document.querySelector(".resumebtn button");

//     resBtn.addEventListener("click",function(){
//         window.location.href="/Yash Auti Resume.pdf";
//     })
// }
// handleresumeClick();


// const tl=gsap.timeline();
// gsap.to(".logo img", {
//     y: -20,          // Moves the image up by 20px
//     repeat: -1,      // Infinite repeat
//     yoyo: true,      // Makes the animation reverse on every repeat
//     duration: 2,     // Duration of the floating movement
//     ease: "power1.inOut"  // Smooth easing for floating effect
//   });

//   // GSAP Staggered Animation for Navigation Items
//   tl.from(".navelem a", {
//     opacity: 0,     // Starts with invisible elements
//     y: -30,         // Moves them from 30px above
//     duration: 0.5,  // Duration of each animation
//     stagger: 0.2,   // 0.2 second delay between each nav item appearing
//     ease: "power2.out", // Smooth easing
//   });

//   // Optional: Animation for the rest of the hero section
//   tl.from(".right h1", {
//     opacity: 0,
//     x: -100,
//     duration: 1,
//     delay: 0.8, // Starts after the nav items
//     ease: "power2.out"
//   });

//   tl.from(".right h4", {
//     opacity: 0,
//     y: 30,
//     duration: 1,
//     delay: 1,
//     ease: "power2.out"
//   });
  
//   tl.from(".resumebtn button", {
//     opacity: 0,
//     scale: 0.8,
//     duration: 1,
//     delay: 1,
//     ease: "elastic.out(1, 0.5)" // Bouncy effect
//   });
// tl.from(".card img",{
//     y: -20,          // Moves the image up by 20px
//     repeat: -1,      // Infinite repeat
//     yoyo: true,      // Makes the animation reverse on every repeat
//     duration: 2,     // Duration of the floating movement
//     ease: "power1.inOut"
// })

// // Animation for each card in the wrappcard section
// gsap.from(".cards", {
//     scrollTrigger: {
//         trigger: ".wrappcard", // Container for the cards
//         scroller: "#main",     // Ensure this matches Locomotive Scroll's container if you use it
//         start: "top 80%",      // Start the animation when the top of the wrappcard reaches 80% of the viewport
//         end: "bottom 20%",     // Animation ends when the bottom of the wrappcard reaches 20% of the viewport
//         scrub: 1,              // Smooth scrolling effect
//     },
//     opacity: 0,                // Cards start invisible
//     y: 50,                     // Cards slide in from 50px below
//     stagger: 0.2,              // 0.2 seconds delay between each card's animation
//     duration: 1.5,             // Animation duration for each card
//     ease: "power2.out"         // Smooth easing function for polished feel
// });

// // Add hover animation for the card buttons to make them interactive
// gsap.from(".card-button", {
//     scale: 0.9,
//     duration: 0.4,
//     ease: "power1.out",
//     paused: true,
//     onEnter: (button) => {
//         gsap.to(button.target, {
//             scale: 1.1,  // Slightly enlarge the button when hovered
//             duration: 0.2,
//             ease: "power1.inOut",
//         });
//     },
//     onLeave: (button) => {
//         gsap.to(button.target, {
//             scale: 1,    // Revert the button back to its original size
//             duration: 0.2,
//             ease: "power1.inOut",
//         });
//     }
// });


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

const handleResumeClick = () => {
    const resBtn = document.querySelector(".resumebtn button");

    resBtn.addEventListener("click", function() {
        window.location.href = "/Yash Auti Resume.pdf";
    });
}
handleResumeClick();

// GSAP Timeline for Sequential Animations
const tl = gsap.timeline();
gsap.to(".logo img", {
    y: -20,          // Moves the image up by 20px
    repeat: -1,      // Infinite repeat
    yoyo: true,      // Makes the animation reverse on every repeat
    duration: 2,     // Duration of the floating movement
    ease: "power1.inOut"  // Smooth easing for floating effect
});

// GSAP Staggered Animation for Navigation Items
tl.from(".navelem a", {
    opacity: 0,     // Starts with invisible elements
    y: -30,         // Moves them from 30px above
    duration: 0.5,  // Duration of each animation
    stagger: 0.2,   // 0.2 second delay between each nav item appearing
    ease: "power2.out", // Smooth easing
});

// Hero Section Animation
tl.from(".right h1", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.8, // Starts after the nav items
    ease: "power2.out"
})
.from(".right h4", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
}, "-=0.5") // Sync with previous animation
.from(".resumebtn button", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "elastic.out(1, 0.5)" // Bouncy effect
}, "-=0.3");

gsap.to(".card img", {
    y: 20,              // Moves the image up and down by 20px
    repeat: -1,         // Infinite repeat
    yoyo: true,         // Reverses animation on every repeat
    duration: 2,        // Duration of one full floating cycle
    ease: "power1.inOut" // Smooth easing for floating effect
});

// Floating Animation for Cards
tl.from(".cards img", {
    y: -20,
    repeat: -1,      // Infinite repeat
    yoyo: true,      // Reverse on every repeat
    duration: 2,     // Floating movement duration
    ease: "power1.inOut"
});

// Scroll-triggered Animation for Cards
gsap.from(".cards", {
    scrollTrigger: {
        trigger: ".wrappcard", // Container for the cards
        scroller: "#main",     // Use Locomotive Scroll's container
        start: "top 80%",      // Start the animation when the top of the wrappcard reaches 80% of the viewport
        end: "bottom 20%",     // Animation ends when the bottom of the wrappcard reaches 20% of the viewport
        scrub: 1,              // Smooth scrolling effect
    },
    opacity: 0,                // Cards start invisible
    y: 50,                     // Cards slide in from 50px below
    stagger: 0.2,              // 0.2 seconds delay between each card's animation
    duration: 1.5,             // Animation duration for each card
    ease: "power2.out"         // Smooth easing function for polished feel
});

// Hover Animation for Card Buttons
document.querySelectorAll(".card-button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        gsap.to(button, {
            scale: 1.1,  // Slightly enlarge the button when hovered
            duration: 0.2,
            ease: "power1.inOut"
        });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, {
            scale: 1,    // Revert the button back to its original size
            duration: 0.2,
            ease: "power1.inOut"
        });
    });
});

// Sync Locomotive Scroll with GSAP ScrollTrigger
scroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Refresh ScrollTrigger on window updates
ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

// Timeline for the "My Skills" title animation
const skillsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".thirdpage",
      scroller: "#main",
      start: "top 80%",
      end: "bottom 20%",
      scrub: 1,
    }
  });
  
  // Animate the title
  skillsTl.from(".thirdpage h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });
  
  // Animate the skill cards
  gsap.from(".skillspart .card", {
    scrollTrigger: {
      trigger: ".skillspart",
      scroller: "#main",
      start: "top 90%", // Trigger animation when the top of the skills part hits 90% of the viewport
      end: "bottom 30%",
      scrub: 1,
    },
    opacity: 0,
    y: 100,
    stagger: 0.3,   // Delay between each card
    duration: 1.5,  // Duration of each card's animation
    ease: "back.out(1.7)"  // Easing for a smooth, bouncing effect
  });
  
  // Store initial background colors in a data attribute
document.querySelectorAll(".skill-box").forEach(skillBox => {
    // Store the original background color
    skillBox.dataset.originalColor = getComputedStyle(skillBox).backgroundColor;

    skillBox.addEventListener("mouseenter", () => {
        gsap.to(skillBox, {
            scale: 1.1,           // Enlarge on hover
            rotate: 10,           // Slight rotation for a dynamic effect
            backgroundColor: "orange", // Temporary bright color on hover
            duration: 0.3,
            ease: "power2.out"
        });
    });

    skillBox.addEventListener("mouseleave", () => {
        gsap.to(skillBox, {
            scale: 1,             // Revert to original size
            rotate: 0,            // Revert rotation
            backgroundColor: skillBox.dataset.originalColor, // Restore original background color
            duration: 0.3,
            ease: "power2.out"
        });
    });
});



    // Timeline for the "My project" title animation
const myproject = gsap.timeline({
    scrollTrigger: {
      trigger: ".secondpage",
      scroller: "#main",
      start: "top 80%",
      delay:1,
      duration:1,
      end: "bottom 20%",
      scrub: 1,
    }
  });

  // Animate the title
  myproject.from(".secondpage h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out"
  });

  // Animate the project cards
  gsap.from(".wrappcard .cards", {
    scrollTrigger: {
      trigger: ".cards",
      scroller: "#main",
      start: "top 90%", // Trigger animation when the top of the skills part hits 90% of the viewport
      end: "bottom 30%",
      scrub: 1,
    },
    opacity: 0,
    y: 100,
    stagger: 0.3,   // Delay between each card
    duration: 1.5,  // Duration of each card's animation
    ease: "back.out(1.7)"  // Easing for a smooth, bouncing effect
  });

  //animation for contact section
  gsap.from(".contact-section", {
    scrollTrigger: {
        trigger: ".contact-section",
        scroller: "#main", // Ensure this matches Locomotive Scroll's container if you're using it
        start: "top 80%", // Trigger animation when top of section is at 80% of the viewport
        end: "bottom 20%", // End animation when bottom of section is at 20% of the viewport
        scrub: 1, // Smooth scrolling effect
    },
    opacity: 0.8, // Start with invisible
    y: 50, // Slide in from 50px below
    duration: 1.5, // Duration of animation
    ease: "power2.out" // Smooth easing
});

// GSAP Floating Animation for Contact Section
gsap.to(".contact-section", {
    y: 10, // Moves the section up and down by 10px
    repeat: -1, // Infinite repeat
    yoyo: true, // Reverse animation on every repeat
    duration: 2, // Duration of one full floating cycle
    ease: "power1.inOut" // Smooth easing for floating effect
});