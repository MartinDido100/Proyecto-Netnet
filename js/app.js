// Video auto reproduces with 0 0 scroll


const headerVideo = document.querySelector(".header-video");
const headerImg = document.querySelector(".header-img");

addEventListener("load",()=>{
    if (window.scrollY == 0) {
        setTimeout(() => {
            headerVideo.play();
            headerImg.style.opacity = "0";
            headerVideo.style.opacity = "1";
        }, 1000);
    }
})

addEventListener("scroll",()=>{
    if (window.scrollY == 0) {
        setTimeout(() => {
            headerVideo.play();
            headerVideo.style.opacity = "1";
            headerImg.style.opacity = "0";
        }, 700);
    }
    if (window.scrollY >= 350) {
        headerVideo.pause();
        headerVideo.style.opacity = "0";
        headerImg.style.opacity = "1";
    }
});
