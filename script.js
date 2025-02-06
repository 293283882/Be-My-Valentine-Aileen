document.getElementById("no").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.top = Math.random() * window.innerHeight + "px";
    this.style.left = Math.random() * window.innerWidth + "px";
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("message").innerText = "Yay! I can't wait to spend Valentine's Day with you! 💖";
});
