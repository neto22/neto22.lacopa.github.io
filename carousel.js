var nav = true;
var mq = window.matchMedia("(max-width: 860px)");

if (mq.matches) {
    nav = false;
}

$(document).ready(function() { 
 
  $("#owl-demo").owlCarousel({
 
    navigation : nav, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    autoPlay: 3000

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false

  });
 
});
$.fn.followTo = function (pos) {
    var $this = this,
        $window = $(window);

    $window.scroll(function (e) {
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 130
            });
        }
    });
};
var mq = window.matchMedia("(min-width: 1060px)");

if (mq.matches) {
    $('.category').followTo(4650);
} else {
    $('.category').followTo(6250);
}