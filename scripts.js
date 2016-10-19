var $create = $('#create-btn');
var $title = $('#title');
var $url = $('#url');

$('.unread').on('click', '.unread-btn' ,function () {
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read-btn-update');
  $(this).siblings().toggleClass('delete-update txt-dec-update');
});

// enableBtn();
//
// function enableBtn() {
//   if ($title.val() === "" && $url.val() === "") {
//     $create.attr('disabled', true); }
//   else if ($title.val() !== "" && $url.val() !== "") {
//     $create.removeAttr('disabled');
//   }
// }

$create.on('click', function() {
  alert('booooooom');
});
