const daysEl = document.querySelectorAll('p.days');
const hoursEl = document.querySelectorAll('p.hours');
const minutesEl = document.querySelectorAll('p.minutes');
const secondsEl = document.querySelectorAll('p.seconds');
const offerWrapper = document.querySelectorAll('.offer-wrapper');


function toggleDropdown(e) {
  const _d = $(e.target).closest('.dropdown'),
    _m = $('.dropdown-menu', _d);
  setTimeout(function () {
    const shouldOpen = e.type !== 'click' && _d.is(':hover');
    _m.toggleClass('show', shouldOpen);
    _d.toggleClass('show', shouldOpen);
    $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
  }, e.type === 'mouseleave' ? 50 : 0);
}

$('body')
  .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
  .on('click', '.dropdown-menu a', toggleDropdown);






const end_offer = "1 Jan 2022";

function countDown() {
  const end_offer_Date = new Date(end_offer);
  const currentDate = new Date();

  const totalSecond = (end_offer_Date - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minutes = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;


  daysEl.forEach(e => {
    e.innerText = days;
  });
  hoursEl.forEach(e => {
    e.innerText = hours;
  });
  minutesEl.forEach(e => {
    e.innerText = minutes;
  });
  secondsEl.forEach(e => {
    e.innerText = seconds;
  });



  end_expire(totalSecond)

}

var iv = setInterval(countDown, 1000);

function end_expire(date) {
  if (date <= 0) {

    clearInterval(iv);

    daysEl.innerText = 0;
    hoursEl.innerText = 0;
    minutesEl.innerText = 0;
    secondsEl.innerText = 0;


    offerWrapper.forEach(elem => {
      const overlay = document.createElement('div');
      const alert_finish = document.createElement('p');
      overlay.classList.add('offer-expire-end');
      alert_finish.classList.add('alert_finish');
      alert_finish.innerText = 'زمان این پیشنهاد به اتمام رسیده است!';

      let parent = elem.parentElement;
      parent.appendChild(overlay);
      parent.append(alert_finish);
    })
  }
}

$('.owl-carousel').owlCarousel({
  rtl:true,
  loop: true,
  autoWidth: true,
  nav: true,
  dots:false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  margin: 10,
  items: 5
});





$().Modal();