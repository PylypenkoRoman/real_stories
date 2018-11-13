var controller = new ScrollMagic.Controller();

if (($('#slideContainer').length > 0) && document.documentElement.clientWidth > 768) {

  var slidesAmount = $("#slideContainer").children().length;
  var slideWight = $(".horizontal-gallery__item").outerWidth(true)
  var width = $(window).width()
  var duration = (slidesAmount * slideWight) - width

  var wipeAnimation = new TimelineMax()
  .to("#slideContainer", 0.5,   {x: "-20%"})
  .to("#slideContainer", 0.5,   {x: "-40%"})
  .to("#slideContainer", 0.5,   {x: "-60%"})
  .to("#slideContainer", 0.5,   {x: "-80%"})
  .to("#slideContainer", 0.5,   {x: "-100%"})

  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: duration
  })
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addTo(controller);
} else if(($('#slideContainer').length > 0) && document.documentElement.clientWidth <= 768){
  $('.horizontal-gallery').addClass('horizontal-gallery_disabled');
}

if ($('header[data-header-index]').length > 0) {
  var layoutHeight = jQuery('#layout').height()
  new ScrollMagic.Scene({
    triggerElement: '#layout',
    triggerHook: 0,
    duration: layoutHeight
  })
    .setClassToggle("header[data-header-index]", "header_fixed")
    .addTo(controller)
}
//-------------------------------------------

innerHeight = jQuery(window).innerHeight();
headerSize = jQuery('.logo').innerHeight() ;
triggerHookSize = (headerSize / innerHeight * 2);

jQuery('.light-block').each(function(index, elem) {
var block = jQuery(this)
sceneDuration = block.innerHeight();

new ScrollMagic.Scene({
  triggerElement: elem,
  duration: sceneDuration,
  triggerHook: triggerHookSize
})
  .setClassToggle(".logo, .search-btn, .mobile-nav-btn", "dark")
  .addTo(controller);  
});

//-------------------------------------------
// if ($('#map-animate').length > 0) {
//   var mapHeight = jQuery('.map-wrapper').innerHeight()
//   var scene = new ScrollMagic.Scene({
//   triggerElement: '#map-animate', 
//   triggerHook: 1
//   })
//   .setClassToggle(".map-footer", "map_scaled")
//   .addTo(controller);
// }

//-------------------------------------------

jQuery('.animate-section').each(function(){
var animateBlock = this
  
var animateSection = new ScrollMagic.Scene({
    triggerElement: animateBlock,
    triggerHook: 0.8
  })
  .setTween(TweenMax.fromTo(animateBlock, 0.5, {opacity: 0, bottom: "-70px"}, {opacity: 1, bottom: 0}))
  .addTo(controller)
})

//-------------------------------------------

if ($('#jumbotron-main').length > 0) {
  var animateBlock = jQuery('#jumbotron-text')
  var animateSection = new ScrollMagic.Scene({
      triggerElement: '#jumbotron-main',
      triggerHook: 0
    })
    .setTween(TweenMax.fromTo(animateBlock, 2, {opacity: 0, bottom: "-70px"}, {opacity: 1, bottom: 0}))
    .addTo(controller)
  }
//-------------------------------------------
if ($('.animation-secondary-items').length > 0) { 
  jQuery('.animation-secondary-items').each(function(){
    var animateBlock = this
    var animateSection = new ScrollMagic.Scene({
        triggerElement: '#jumbotron-main',
        triggerHook: 0
      })
      .setTween(TweenMax.fromTo(animateBlock, 3, {opacity: 0}, {opacity: 1, delay: 2}))
      .addTo(controller)
  })
} 
//-------------------------------------------


// $(".horizontal-gallery__content").css('wight', duration )