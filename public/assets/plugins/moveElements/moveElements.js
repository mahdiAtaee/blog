//translate elements in page
const hero = document.querySelector('.main-header-section');
const persons = document.querySelectorAll('.personElem');
const headerTitle = document.querySelector('.header-title');


hero.addEventListener('mousemove', (e) => {
    persons.forEach(person => {
        const speed = person.getAttribute('data-speed');

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;



        person.style.transform = `translateY(${y}px) translateX(${x}px)`;
        headerTitle.style.transform = `translateY(${y}px)`;
    });
});