const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const resultContainer = document.getElementById("resultContainer");
const resultImage = document.getElementById("resultImage");
const bgVideo = document.getElementById("bgVideo");

/* CONFETTI */
function launchConfetti(){
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame(){
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if(Date.now() < end){
            requestAnimationFrame(frame);
        }
    })();
}

/* RUNAWAY NO BUTTON */
let activated = false;

function moveNoButton(){
    if(!activated){
        noBtn.style.position = "absolute";
        document.body.appendChild(noBtn);
        activated = true;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 10; // margin
    const maxY = window.innerHeight - noBtn.offsetHeight - 10;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Mouse for PC
noBtn.addEventListener("mouseenter", moveNoButton);
// Touch for mobile
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // prevent click
    moveNoButton();
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
    launchConfetti();
    document.querySelector(".container").style.display = "none";
    resultContainer.style.display = "flex";

    bgVideo.currentTime = 0;
    bgVideo.play();

    resultImage.style.display = "block";
    resultImage.src = "Assets/inkpx-word-art (1).png";

    setTimeout(() => {
        resultImage.src = "Assets/DAVEdesign (10).png";
    }, 3000);
});