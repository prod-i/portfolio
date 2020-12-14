{ //SLIDER

  new WOW().init();
var mySwiper = new Swiper('.swiper-container', {
  pagination: {
  el: '.project-pagination',
  bulletClass: 'project-bullet',
  bulletActiveClass: 'project-bullet-active' ,
  clickable: true,
},
});

}

{ // MAIL

$("form").submit(function() { //Change
  var th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", //Change
    data: th.serialize()
  }).done(function() {
    alert("Thank you!");
    setTimeout(function() {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

}

{ // SMOOTH SCROLL
  $('[data-scroll]').on('click', function(event){
    event.preventDefault();
    const blockId = $(this).data('scroll');
    const blockOffset = $(blockId).offset().top - 20;

    $('.nav a').removeClass('active');
    $(this).addClass('active');




    $('html, body').animate({
      scrollTop: blockOffset,
    }, 1000);
    $('.nav').removeClass('active');
    $('.nav-toggle').removeClass('active');

  });

} // SMOOTH SCROLL!>
