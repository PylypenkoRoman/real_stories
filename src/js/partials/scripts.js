
function initMap() {
  var uluru = {lat: 50.4441397, lng: 30.5218548};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: uluru
  });
  var image='/img/pointer.png';
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
    icon:image,
  });
  var styledMapType=new google.maps.StyledMapType(
		[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
],
		{name:'Styled Map'}
	);
	map.mapTypes.set('styled_map',styledMapType);
	map.setMapTypeId('styled_map');

}


(function () {

  jQuery('.js-search-modal-btn-open').click(function(){
    jQuery('#js-mobile-nav').removeClass('open');
    jQuery('body').addClass('overflow-hidden');
    jQuery('.wrapper').addClass('display-none');
    jQuery('#js-search-modal').addClass('open');
    setTimeout(function() { $('#js-search').focus() }, 100);
	});
    jQuery('#js-search-modal-btn-close').click(function(){
    jQuery('body').removeClass('overflow-hidden');
    jQuery('.wrapper').removeClass('display-none');
    jQuery('#js-search-modal').removeClass('open');
	});

  jQuery('.js-mobile-nav-btn-open').click(function(){
    jQuery('body').addClass('overflow-hidden');
    jQuery('#js-mobile-nav').addClass('open');
	});
    jQuery('#js-mobile-nav-btn-close').click(function(){
    jQuery('body').removeClass('overflow-hidden');
    jQuery('#js-mobile-nav').removeClass('open');
    });

  jQuery('.js-feedback-btn-open').click(function(){
    jQuery('#js-mobile-nav').removeClass('open');
    jQuery('body').addClass('overflow-hidden');
    jQuery('.wrapper').addClass('display-none');
    jQuery('#js-feedback').addClass('open');
    });
    jQuery('#js-feedback-btn-close').click(function(){
    jQuery('body').removeClass('overflow-hidden');
    jQuery('.wrapper').removeClass('display-none');
    jQuery('#js-feedback').removeClass('open');
    });
  function getMinMarge( newItems ) {
    var center  = newItems.eq(0).outerWidth(true) + (newItems.eq(1).outerWidth(true) / 2);
    var minMarg = ($(window).width() / 2) - center;
    return minMarg;
  }

  function setNavi() {
    var sliderLength = $("#photo-slider").children().length;
    $('span[data-quantity-slides]').text(sliderLength);
    var slider = $("#photo-slider")
    slider.children().each(function () {
        var currentElement = $(this);
        var quantity = currentElement.index()
        currentElement.find('span[data-current-slide]').text(quantity+1)
    })
}

  jQuery('.project-photo__slider').carouFredSel({
      prev: "#photo-slider-btn-left",
      next: "#photo-slider-btn-right",
      width: 10000,	//	should be wide enough ;)
      align: false,
      circular: true,
      infinite: true,
      items: 3,
      auto: true,
      scroll: {
        items: 1,
        duration: 1000,
        onBefore: function( data ) {
          $(this).parent().animate({
            'marginLeft': getMinMarge( data.items.visible )
          }, data.scroll.duration);
          data.items.old.eq(1).animate({
            'opacity': 0.2
          }, data.scroll.duration);
          data.items.visible.eq(1).animate({
            'opacity': 1
          }, data.scroll.duration);
        }
		},
		onCreate: function( data ) {
			$(this).parent().css({
				'marginLeft': getMinMarge( data.items )
			});
			$(this).children().not(':eq(1)').css({
				'opacity': 0.2
            });
            setNavi();
		}

  });

  jQuery(".number-slider__slides-holder").carouFredSel({

    direction: "up",
    items: {
      visible: 1,
      height: "300px"
    },
    scroll: {
      items: 1
    },
    auto: {
      timeoutDuration: 3000}
    });


var viewState = jQuery('input.filter__control:checked').attr('id');

if ( viewState === 'works-separated' ) {
    jQuery('.works').addClass('works-separated')
}
jQuery('.filter__control').click(function(){
    viewState = jQuery(this).attr('id');
    if ( jQuery(this).is(':checked') ) {
        if ( viewState === 'works-separated' ) {
            jQuery('.works').addClass('works-separated')
        } else {
            jQuery('.works').removeClass('works-separated');
        }
    }
});
jQuery('a[href*="#"]').bind("click", function(e){
        var anchor = $(this);
    jQuery('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top}, 1000);
        e.preventDefault();
    });

}());

