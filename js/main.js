/* global $ */
'use strict';

var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index]);
    index += 1;
    setTimeout(function () { 
      showText(target, message, index, interval); 
    }, interval);
  }
  else if(index === message.length) {
    return new Promise(function(resolve, reject){
      resolve();
    });
  }
};

$(document)
  .ready(function(){
    showText('.animate', 'Hello, I\'m Nicole.', 0, 100);
  });


// $.when().then(
//   $(document)
//     .ready(function(){
//       showText('#hi-1', 'Hello', 0, 100);
//     }).then(function(){
//       console.log('here');
//       showText('#hi-2', ', I\'m Nicole.', 0, 100);
//     }).then(function(){
//       showText('#hi-3', 'I am a full stack web developer with a focused interest in front-end development / UI & UX.', 0, 100);
//     }).done(
//       console.log('done')
//     )
// );


// showText('#hi-4', 'I\'m passionate about learning and materializing great ideas.', 0, 500);
// showText('#hi-5', 'When I\'m online, I am coding, reading, designing and tinkering.', 0, 500);
// showText('#hi-6', 'When I\'m offline, I\'m traveling, camping, rock climbing, snowboarding, hula hooping, cooking or playing with my dog.', 0, 500);




// function createString(input) {
//   $(input).each(function() {
//     let myStr = $(this).html();
//     myStr = myStr.split('');
     
//     let contents = '';
//     for (let i = 0, len = myStr.length; i < len; i++) {
//       contents += '<span class="single-char char-' +  i +  '">' + myStr[i] +  '</span>';
//     }
//     $(input).html(contents);
//   });
// }

// $('a').each(function() {
//   var a = new RegExp('/' + window.location.host + '/');
//   if(!a.test(this.href)) {
//     $(this).click(function(event) {
//       event.preventDefault();
//       event.stopPropagation();
//       window.open(this.href, '_blank');
//     });
//   }
// });
 
// $('document').ready(function() {
//   let myHeader = $('#main-header');
//   createString(myHeader);
//   $('.char-3').addClass('sky-blue');
//   $('.char-10').addClass('sky-blue');
//   $('.char-5').addClass('spacing');
// }); 