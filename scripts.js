$('.unread').on('click', '.unread-btn' ,function () {
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read-btn-update');
  $(this).siblings().toggleClass('delete-update txt-dec-update');
});
