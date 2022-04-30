//*/ slider or carousel for section three /*//

//assign html dom to constant
const slider = document.getElementById('card-wrapper');
const carousel_wrapper = document.getElementById('carousel_wrapper');
const slides = document.querySelectorAll('.slider-card');
const carousel_elem = document.querySelectorAll('.carousel-section');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const carousel_next = document.getElementById('carousel-next');
const carousel_perv = document.getElementById('carousel_prev');
const indecator = document.querySelectorAll('.indecator');
const parent = document.querySelector('.dots');
let index = 0;
let carousel_index = 0;


//add class active to add settings
let addClassToElements = (ind, elem) => {
    //add class active to card wrapper for transform
    slider.children[ind].classList.add('active');

    //add class active to indecator for add dot to inner 
    elem.classList.add('active');
};


//remove before class active to remove setting 
let removeClass = () => {
    //remove class active from each indecator for hide inner dot
    document.querySelector('.indecator.active').classList.remove('active');

    //remove class active from card wrapper for remove transform
    document.querySelector('.slider-card.active').classList.remove('active');
};


//add class active to card[index]
let addToChildren = (ind) => {
    //add class active to dots(card wrapper) child
    parent.children[ind].classList.add('active');

    //add class active to card wrapper for transform on this
    slider.children[ind].classList.add('active');
};


//indecator setting 
indecator.forEach(((elem, section) => {
    elem.addEventListener('click', () => {
        index = section;
        removeClass();
        addClassToElements(section, elem)
        slider.style.transform = `translateX(${(- index) * 300}px)`;
    })
}));



//slider to next and show next card
next.addEventListener('click', () => {
    index++;
    if (index > slides.length - 1) {
        index = 0;
    }
    removeClass();
    addToChildren(index);
    slider.style.transform = `translateX(${-index * 300}px)`;
});


//slider to previos and show privios card
prev.addEventListener('click', () => {
    index--;
    if (index <= slides.length - 1) {
        index = 0;
    }
    removeClass();
    addToChildren(index)

    slider.style.transform = `translateX(${index * 300}px)`;
});





//section four

//slider to next and show next card
carousel_next.addEventListener('click', () => {
    let parent_width = carousel_wrapper.offsetWidth;


    carousel_index++;
    if (parent_width <= 1040) {
        carousel_wrapper.style.transform = `translateX(${-carousel_index * 23}%)`;
        if (carousel_index > carousel_elem.length - 1) {
            carousel_index = carousel_elem.length - 1;
        }
    } else {
        if (carousel_index > (carousel_elem.length - 1) / 2) {
            carousel_index = 2;
        }
        carousel_wrapper.style.transform = `translateX(${-carousel_index * 25}%)`;
    }
});

carousel_perv.addEventListener('click', () => {
    carousel_index--;
    if (carousel_index < carousel_elem.length - 1) {
        carousel_index = 0;
    }

    carousel_wrapper.style.transform = `translateX(${carousel_index * 25}%)`;
});

let autoSlide = () => {
    let parent_width = carousel_wrapper.offsetWidth;


    carousel_index++;
    if (parent_width <= 1040) {
        carousel_wrapper.style.transform = `translateX(${-carousel_index * 23}%)`;
        if (carousel_index > carousel_elem.length - 1) {
            carousel_index = 0;
        }
    } else {
        if (carousel_index > (carousel_elem.length - 1) / 2) {
            carousel_index = 0;
        }
        carousel_wrapper.style.transform = `translateX(${-carousel_index * 25}%)`;
    }
}
// let slide = setInterval(autoSlide, 1000);


// carousel_wrapper.addEventListener('mouseover', () => {
//     // clearInterval(slide)
// });


// carousel_wrapper.addEventListener('mouseleave', () => {
//     // setInterval(() => {
//     //     slide
//     // }, 1000);
// });
