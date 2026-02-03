const iconContainer = document.querySelector(".weather-icon-container");
const weatherImg = document.querySelector(".weather-icon");

// iconContainer.addEventListener("mousemove", (e) => {
//     const rect = iconContainer.getBoundingClientRect();
    
//     // Calculate mouse position relative to the center
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     // Set tilt intensity (30 degrees)
//     const rotateY = ((x - centerX) / centerX) * 30; 
//     const rotateX = ((y - centerY) / centerY) * -30;

//     // Apply the pivot: Tilt + Lift + Scale
//     weatherImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px) scale(1.1)`;
//     weatherImg.style.animation = "none"; // Pause floating while interacting

//     // Dynamic Shadow (moves away from the cursor)
//     const shadowX = (x - centerX) * -0.15;
//     const shadowY = (y - centerY) * -0.15;
//     weatherImg.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.3))`;
// });

// Reset on leave
iconContainer.addEventListener("mouseleave", () => {
    weatherImg.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)`;
    weatherImg.style.filter = `drop-shadow(0px 10px 15px rgba(0,0,0,0.1))`;
    weatherImg.style.animation = "floatIcon 4s ease-in-out infinite";
});