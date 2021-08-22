"use strict";

$(document).ready(function () {
  //Sidebar
  // Reply-btn
  $('.reply').click(function (event) {
    event.preventDefault();
    $('.replyToggle').toggleClass('d-none');
    $('.replyContent').toggleClass('d-none');
    $('.assignmentChange').toggleClass('d-none');
    $('.replyArea').toggleClass('d-none');
  });
  $('.replyCancel').click(function (event) {
    event.preventDefault();
    $('.replyToggle').toggleClass('d-none');
    $('.replyContent').toggleClass('d-none');
    $('.assignmentChange').toggleClass('d-none');
    $('.replyArea').toggleClass('d-none');
  }); // View

  $('.myDropdown').click(function (event) {
    $('.myDropdownEdit').toggleClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
