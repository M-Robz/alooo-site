function dbQuery(searchType, string) {
  var loadMsgDelay,
      container = $('#tableContainer'),
      table = $('#serverResponse');
  
  $('.error').remove();
  $.ajax('server-scripts/ownership.php', {
    type: 'POST',
    data: { 
      'searchType': searchType,
      'string': string 
    },
    dataType: 'text',
    success: function(response) {
      table.html(response);
      container.fadeIn();
    },
    error: function(request, errorType, errorMessage) {
      container.before($(
        '<div class="error">' +
        'Error: ' + errorType +
        '</div>'
      ));
    },
    timeout: 10000,
    beforeSend: function() {
      loadMsgDelay = setTimeout(function() {
        container.before($('<div class="loading">Please wait...</div>'));
      }, 2000);
    },
    complete: function() {
      clearTimeout(loadMsgDelay);
      $('.loading').remove();
    }
  });
}

$(document).ready(function() {
  var container = $('#tableContainer'),
      table = $('#serverResponse');
  
  container.hide();
  $('select').val('default');
  $('form').trigger('reset');

  $('select').on('change', function() {
    var searchType = $(this).data('criterion'),
        string = $(this).val();
    if (string != 'default') {
      $('form').trigger('reset');
      container.fadeOut(function() {
        table.empty();
        dbQuery(searchType, string);
      });
    }
  });
  
  $('form').on('submit', function(event) {
    event.preventDefault();
    var searchType = $(this).data('criterion'),
        string = $(this).find('input[type="search"]').val();
    if (string.length > 0) {
      $('form').not(this).trigger('reset');
      $('select').val('default');
      container.fadeOut(function() {
        table.empty();
        dbQuery(searchType, string);
      });
    }
  });

});