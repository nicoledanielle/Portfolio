/* global $ */
'use strict';

function createString(input) {
  $(input).each(function() {
    let myStr = $(this).html();
    myStr = myStr.split('');
     
    let contents = '';
    for (let i = 0, len = myStr.length; i < len; i++) {
      contents += '<span class="single-char char-' +  i +  '">' + myStr[i] +  '</span>';
    }
    $(input).html(contents);
  });
}

$('a').each(function() {
  var a = new RegExp('/' + window.location.host + '/');
  if(!a.test(this.href)) {
    $(this).click(function(event) {
      event.preventDefault();
      event.stopPropagation();
      window.open(this.href, '_blank');
    });
  }
});
 
$('document').ready(function() {
  let myHeader = $('#main-header');
  createString(myHeader);
  $('.char-3').addClass('pink');
  $('.char-10').addClass('pink');
  $('.char-5').addClass('spacing');
}); 