//sticky navbar background
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

//new section
function trend() {
    document.getElementById("right-body").style.display = "none";
    document.getElementById("podcast-body").style.display = "none";
    document.getElementById("trending-body").style.display = "block";
}

function home() {
    document.getElementById("right-body").style.display = "block";
    document.getElementById("trending-body").style.display = "none";
    document.getElementById("podcast-body").style.display = "none";
}

function podcast() {
    document.getElementById("right-body").style.display = "none";
    document.getElementById("trending-body").style.display = "none";
    document.getElementById("podcast-body").style.display = "block";
}

//working buttons
function like() {
    document.getElementById('heart').innerHTML = '<i class="ri-heart-line" id="unlike" onclick="unlike();"></i>';
}

function unlike() {
    document.getElementById('heart').innerHTML = '<i class="ri-heart-fill" id="like" onclick="like()"></i>';
}

function mute() {
    document.getElementById('volume').innerHTML = ' <i class="ri-volume-up-line" id="unmute" onclick = "unmute();"></i>';
}

function unmute() {
    document.getElementById('volume').innerHTML = '<i class="ri-volume-mute-fill" id="mute" onclick = "mute();"></i>';
}
