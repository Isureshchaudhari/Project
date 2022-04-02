$(document).ready(function(){

    // top sale owl carousel
    $("#top-sale .owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      responsive : {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000 : {
              items: 5
          }
      }
  });

   // isotope filter
   var $grid = $(".grid").isotope({
    itemSelector : '.grid-item',
    layoutMode : 'fitRows'
});

// filter items on button click
$(".button-group").on("click", "button", function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue});
})

  
  });