/* ------------- Switch tabs ------------- */

// Note: All tabs are visible when page initially loads to prevent page height from contracting before a tab is shown for the first time; also accommodates users w/ JS off.

$(document).ready(function() {
  $('.tabMenu').find('a').first().addClass('active');
  $('.tab').hide();
  $('.tab').first().show();
  
  $('.tabMenu').on('click', 'a', function(event) {
    event.preventDefault();
    var clicked = $(this),
        targetTab = $('#tab-'+clicked.attr('id').split('-')[1]);
  
    if (!clicked.hasClass('active')) {
      $('.tabMenu').find('a').removeClass('active');
      clicked.addClass('active');
      $('.tab').hide();
      targetTab.show();
    }
  });
});