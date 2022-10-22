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
    document.getElementById("trending-page").style.color = "#20d253";
    document.getElementById("home-page").style.color = "white";
    document.getElementById("podcast-page").style.color = "white";
}

function home() {
    document.getElementById("right-body").style.display = "block";
    document.getElementById("trending-body").style.display = "none";
    document.getElementById("podcast-body").style.display = "none";
    document.getElementById("trending-page").style.color = "white";
    document.getElementById("home-page").style.color = "#20d253";
    document.getElementById("podcast-page").style.color = "white";
}

function podcast() {
    document.getElementById("right-body").style.display = "none";
    document.getElementById("trending-body").style.display = "none";
    document.getElementById("podcast-body").style.display = "block";
    document.getElementById("trending-page").style.color = "white";
    document.getElementById("home-page").style.color = "white";
    document.getElementById("podcast-page").style.color = "#20d253";
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
    song.volume = barTwo.value / 100;
}

function unmute() {
    document.getElementById('volume').innerHTML = '<i class="ri-volume-mute-fill" id="mute" onclick = "mute();"></i>';
    song.volume = 0;
}

//modal
const modal1 = document.querySelector('#login-modal');
const modal2 = document.querySelector('#signup-modal');
const openModal1 = document.querySelector('#login');
const closeModal1 = document.querySelector('#modal-login');
const closeModal2 = document.querySelector('#modal-signup');
const logSign = document.querySelector('#log-sign');
const signLog = document.querySelector('#sign-log');

openModal1.addEventListener('click', () => {
    modal1.showModal();
})
closeModal1.addEventListener('click', () => {
    modal1.close();
})
closeModal2.addEventListener('click', () => {
    modal2.close();
})
logSign.addEventListener('click', () => {
    modal1.close();
    modal2.showModal();
})
signLog.addEventListener('click', () => {
    modal2.close();
    modal1.showModal();
})

//functional
let song = new Audio('mp3/1.mp3');
let songIndex = 0;
let play = document.getElementById('play');
let bar = document.getElementById('bar');
let barTwo = document.getElementById('bar2');
let songs = [
    { songName: " Never Gonna Give You Up", filePath: "mp3/1.mp3", cover: "img/poster18.jpeg" }
]

//play song

play.addEventListener('click', () => {
        if (song.paused || song.currentTime <= 0) {
            song.play();
            play.classList.remove('ri-play-circle-fill');
            play.classList.add('ri-pause-circle-fill');
        } else {
            song.pause();
            play.classList.remove('ri-pause-circle-fill');
            play.classList.add('ri-play-circle-fill');
        }
    })
    //progress bar working
song.addEventListener('timeupdate', () => {
    progress = parseInt((song.currentTime / song.duration) * 100);
    bar.value = progress;
})
bar.addEventListener('change', () => {
    song.currentTime = bar.value * song.duration / 100;
})
barTwo.addEventListener('change', () => {
    song.volume = barTwo.value / 100;
})

//nav toggle
const navMenu = document.getElementById('header'),
    navToggle = document.getElementById('toggle'),
    navClose = document.getElementById('close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.right = "0";
    })
}


if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.style.right = "-100%";
    })
}
