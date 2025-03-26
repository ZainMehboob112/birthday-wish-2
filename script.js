function openGift() {
    let lid = document.querySelector(".lid");
    let giftBox = document.querySelector(".gift-box");
    let cakeContainer = document.getElementById("cakeContainer");
    let cutCakeBtn = document.getElementById("cutCakeBtn");

    // Surprise Box Opening
    lid.style.transform = "rotateX(180deg)";
    giftBox.style.transform = "scale(1.1) rotate(10deg)";
    setTimeout(() => {
        giftBox.style.opacity = "0";
    }, 500);

    // Cake Flying Out
    setTimeout(() => {
        cakeContainer.classList.remove("hidden");
        cakeContainer.style.transform = "translateY(-150px)";
        cutCakeBtn.classList.remove("hidden");
        dropConfetti();
    }, 1000);
}

function cutCake() {
    let flames = document.querySelectorAll(".flame");
    let cakeSlice = document.querySelector(".cake-slice");
    let knife = document.getElementById("knife");
    let ageMessage = document.getElementById("ageMessage");

    // Knife Appears & Moves
    knife.classList.remove("hidden");
    knife.style.transform = "translateX(-50px) rotate(45deg)";

    // Cutting the Cake
    setTimeout(() => {
        cakeSlice.classList.remove("hidden");
        cakeSlice.style.transform = "translateX(60px)";
    }, 1000);

    // Blow Out Candles
    flames.forEach(flame => {
        flame.style.animation = "none";
        flame.style.background = "gray";
    });

    // Show Message
    setTimeout(() => {
        ageMessage.classList.remove("hidden");
    }, 1500);
}

function dropConfetti() {
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}