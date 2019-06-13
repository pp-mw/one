$('.no-js').removeClass('no-js').addClass('js');

// SVG-Unterstützung für IE laden.
svg4everybody();

// Menü ein-/ausblenden.
$('.toggle').each(function() {

  var toggle_for = $('#' + $(this).data('for'));

  toggle_for.hide();

  $(this).click(function(e) {
    $(this).toggleClass('active');
    toggle_for.slideToggle();
  });
});
$( document ).ready(function() {
  $('#erlesenes .section').wrap('<div class="bg-circle"></div>');
  $('#erlesenes picture').appendTo($("#erlesenes"));
  $('.fts-jal-single-fb-post').removeAttr('style');
});

/**
 * Add hash to url without scrolling
 *
 * @param String $url - it could be hash or url with hash
 *
 * @return void
 */
function addHashToUrl($url)
{
  if ('' == $url || undefined == $url) {
    $url = '_'; // it is empty hash because if put empty string here then browser will scroll to top of page
  }
  $hash = $url.replace(/^.*#/, '');
  var $fx, $node = jQuery('#' + $hash);
  if ($node.length) {
    $fx = jQuery('<div></div>')
            .css({
                position:'absolute',
                visibility:'hidden',
                top: jQuery(window).scrollTop() + 'px'
            })
            .attr('id', $hash)
            .appendTo(document.body);
    $node.attr('id', '');
  }
  document.location.hash = $hash;
  if ($node.length) {
    $fx.remove();
    $node.attr('id', $hash);
  }
}

// Akkordeon.
var template_path = $('html').data('path');
$('.accordion').addClass('js').find('.a_header').each(function(index, value) {
    $(this).wrap('<a class="a_link" href="#"></a>').parent().append('<i class="a_icon"><svg role="img" class="symbol" aria-hidden="true" focusable="false"><use xlink:href="' + template_path + '/img/icons.svg#arrow-down"></use></svg></i>');
})

$('.a_link').click(function(e) {
    e.preventDefault();
    var accLink = $(this);
    var accParent = $(this).parent();

    if (accParent.hasClass('a_open')) {
        $('.a_open .a_content').slideUp(500).promise().done(function() {
          accLink.find('.a_icon').replaceWith('<i class="a_icon"><svg role="img" class="symbol" aria-hidden="true" focusable="false"><use xlink:href="' + template_path + '/img/icons.svg#arrow-down"></use></svg></i>');
          $('.a_open').removeClass('a_open');
        });
    } else {
        $('.a_open .a_content').slideUp(500).promise().done(function() {
            accLink.find('.a_icon').replaceWith('<i class="a_icon"><svg role="img" class="symbol" aria-hidden="true" focusable="false"><use xlink:href="' + template_path + '/img/icons.svg#arrow-up"></use></svg></i>');
            $('html, body').animate({
                scrollTop: (accParent.offset().top-145)
            }, 500);

            $('.a_open').removeClass('a_open');
            accLink.next().slideDown(500);
            accParent.addClass('a_open');
            addHashToUrl(accParent.attr('id'));
        });
    }
    return false;
});

$('.a_link').mouseup(function() {
    this.blur();
})

$('a[href^="#"]').on('click', function(e){
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop:$(href).offset().top-50
  },'slow');
  e.preventDefault();
});

// Add sticky class to body when scrolling
  $(function() {
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();

      if (scroll > 600) {
          $('#header').addClass('sticky');
      } else {
          $('#header').removeClass('sticky');
      }

    });
  });
