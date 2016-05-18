$(function() {
  $('a.scroll').click(function() {
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 750);
    return false;
  });
});
