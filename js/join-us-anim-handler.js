var joinUsWindow = document.getElementById("join-us-window");
var joinUsContent = document.getElementById("join-us-content");

document.getElementById("join-us").onclick = function() {
    joinUsWindow.style.display = "block";
    joinUsWindow.dataset.active = "true";

    joinUsWindow.style.animation = "fading-in 0.5s forwards";
    joinUsContent.style.animation = "slide-in 1s forwards";
}

joinUsContent.addEventListener("animationend", function() {
    if (joinUsWindow.dataset.active == "false") {
        joinUsWindow.style.display = "none";
    }
});
    
window.onclick = function(event) {
    if (event.target == joinUsWindow) {
        joinUsWindow.style.animation = "fading-out 0.5s forwards"
        joinUsWindow.style.webkitAnimationDelay = "0.5s";
        joinUsContent.style.animation = "slide-out 1s forwards";
            
        joinUsWindow.dataset.active = "false";
    }
 }