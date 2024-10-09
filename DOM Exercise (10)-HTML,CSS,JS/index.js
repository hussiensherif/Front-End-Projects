var imgList = Array.from(document.querySelectorAll(".item img"));
var lightBoxContainer = document.getElementById("lightbox-container");
var lightboxItem = document.getElementById("lightbox-item");
var currentIndex;
var closeBtn = document.querySelector(".fa-solid");
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');



for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function (e) {
        lightBoxContainer.classList.remove("d-none");
        var imgLink = e.target.getAttribute("src");
        currentIndex = imgList.indexOf(e.target)
        lightboxItem.style.backgroundImage = `url(${imgLink})`;
    })
}



function closeSlide() {
    lightBoxContainer.classList.add("d-none");
}
closeBtn.addEventListener("click", closeSlide)



function nextSlide() {
    currentIndex++
    if (currentIndex > imgList.length - 1) {
        currentIndex = 0;
    }
    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener("click", nextSlide)



function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1;
    }
    var imgSrc = imgList[currentIndex].getAttribute('src');
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener("click", prevSlide);



(function bindSlideEvents() {
    // Keyboard navigation: Right arrow for next slide, Left arrow for previous slide
    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
            nextSlide();
        } 
        else if (e.key === "ArrowLeft") {
            prevSlide();
        }
        else if (e.key === "Escape") {
            lightBoxContainer.classList.add("d-none");
        }
    });
}());