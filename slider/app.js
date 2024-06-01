const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
})

const goPrev = () => {
    counter--
    slider();
}

const goNext = () => {
    counter++
    slider();
}

const slider = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter*100}%)`
        }
    )
}