/**
 * Alphahex - A large, responsive website template.
 * ================================================
 * Copyright (c) 2017 TheDragonRing <hello@thedragonring.me>, under the MIT License.
 */

$(document).ready(function () {

  var $fadeIn = $('[data-action=fadeIn]');
  $fadeIn.removeAttr('data-action');
  $fadeIn.hide();
  $fadeIn.fadeIn(500); // Fade page in.

  $('[data-action=scrollToTop]').click(function () {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0 // Animate scrolling to the top of the page.
    }, 500);
  });

  $('a').each(function () {
    if ($(this).attr('href') === '') {
      $(this).click(function () {
        event.preventDefault(); // Prevent anchor elements without a href attribute value from reloading the page.
      });
    }
  });

  $.get('https://api.github.com/repos/thedragonring/alphahex/releases/latest', function(data){
    $('#alphahex .download').attr('href', data.zipball_url); // Get latest GitHub release download.
  });

  $('[name=subject]').keypress(function (event) {
    if (event.which === 13) {
      $('[name=message]').focus(); // Focus message after clicking enter in subject field.
    }
  });
  $('#submit').focus(function () {
    var $subject = $('[name=subject]').val();
    var $body = $('[name=message]').val();
    if ($subject && $body) {
      var $url = 'mailto:hello@thedragonring.me?subject=' + $subject + '&body=' + $body;
      $(this).attr('href', $url); // Set contact form mailto link.
    } else {
      $(this).attr('href', '#'); // If contact form is empty, set link back to default/
    }
  });
  $('#submit').click(function () {
    if ($(this).attr('href') === '#') {
      event.preventDefault(); // Prevent empty contact form being executed.
    }
  });
  $('#reset').click(function () { // Clear contact form.
    event.preventDefault();
    $('[name=subject]').val('');
    $('[name=message]').val('');
  });

  function getYear() {
    var year = new Date().getFullYear();
    if (year === 2017) {
      return year; // Return the year if it is 2017.
    } else {
      return '2017 - ' + year; // Return 2017 until the current year.
    }
  }
  $('#copyright').html('<a href="https://thedragonring.me/alphahex">Content: &copy; ' + getYear() + ' Alphahex</a>' + ' <a href="https://thedragonring.me">Design: &copy; ' + getYear() + ' TheDragonRing</a>' + '<a href="https://opensource.org/licenses/MIT">License: MIT License'); // Set copyright.

});