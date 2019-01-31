var allBtn = $('.buttons > button');
var size = allBtn.length;

for (let i = 0; i < allBtn.length; i++) {
  $(allBtn[i]).on('click', function(e) {
    let index = $(e.currentTarget).index();
    $('.images').css({
      'margin-left': index * -600 + 'px'
    });
    n = index;
    activeBtn(allBtn.eq(i));
  });
}

var n = 0;

var timerId;

allBtn.eq(0).trigger('click');
playSlide();

function playSlide() {
  timerId = setInterval(function() {
    allBtn.eq(n % size).trigger('click');
    n++;
  }, 1000);
}

$('.images').on('mouseenter', function() {
  window.clearInterval(timerId);
});

$('.images').on('mouseleave', function() {
  playSlide();
});

function activeBtn($btn) {
  $btn
    .addClass('red')
    .siblings('.red')
    .removeClass('red');
}