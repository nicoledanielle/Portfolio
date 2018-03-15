/* global $ */
'use strict';

$(document).ready(function(){
  $('.mobile-arrow').click(function() {
    console.log('here');
    $('.main-nav-item').toggleClass('hide');
  });
});