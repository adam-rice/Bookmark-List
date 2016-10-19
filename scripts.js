var $create = $('#create-btn');
var $title = $('#title');
var $url = $('#url');
var $list = $('#list');


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
  validateInputs();
  clearFields();
  counter();
  $title.focus();
});

$url.bind('keydown', function(e) {
	if (e.keyCode==13) {
    validateInputs();
    clearFields();
    counter();
    $title.focus();
	}
});

$('.list').on('click', '.unread-btn', function () {
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read-btn-update');
  $(this).siblings().toggleClass('delete-update txt-dec-update');
  counter();
});

$('.list').on('click', '.delete', function() {
  $(this).parent().remove();
  counter();
});

function clearFields() {
  $title.val('');
  $url.val('');
}

function counter() {
 var $saved = $('#saved-bkm');
 var $read = $('#read-bkm');
 var $unread = $('#unread-bkm');
 var unread = $('.unread').length;
 var read = $('.read').length;
 var total = $('li').length;
 $saved.text(total);
 $read.text(read);
 $unread.text(unread - read);
}

function addBkm() {
  $('ul').prepend(`
    <li class="new-bkm unread">
      <h2>${$title.val()}</h2><hr>
      <a href="${$url.val()}" target="_blank">${$url.val()}</a><hr id="hr-lower">
      <button class="unread-btn" type="button" name="button">Read</button>
      <button class="delete" type="button" name="button">Delete</button>
    </li>
    `)
}

function validateInputs() {
  if ($title.val() === '' || $url.val() === '') {
   alert("Please enter you bookmark information!");
 } else {
   addBkm();
  }
}
