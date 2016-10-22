var $create = $('#create-btn');
var $title = $('#title');
var $url = $('#url');
var $list = $('.list');
var $trashBtn = $('#remove-read-btn');

$create.on('click', function() {
  submitBkm();
  revealCounter();
});

$url.bind('keydown', function(e) {
  if (e.keyCode==13) {
    submitBkm();
    revealCounter();
  }
});

$title.keyup( function() {
  enableCreate();
});

$url.keyup( function ()  {
  enableCreate();
});

$list.on('click', '.unread-btn', function () {
  $(this).parent().toggleClass('read');
  $(this).toggleClass('read-btn-update txt-dec-update');
  $(this).siblings().toggleClass('delete-update txt-dec-update');
  $(this).closest('li').find('.url-span').toggleClass('txt-dec-update');
  counter();
  revealRemoveReadBtn();
});

$list.on('click', '.delete', function() {
  $(this).parent().remove();
  counter();
  revealCounter();
  revealRemoveReadBtn();
});

$trashBtn.on('click', function() {
  $('.read').closest('li').remove();
  counter();
  revealCounter();
  revealRemoveReadBtn();
});

function enableCreate() {
  var title = $title.val();
  var url = $url.val();
  if (title === "" || url === "") {
    $create.attr('disabled', true); }
  else if (title !== "" && url !== "") {
    $create.attr('disabled', false);
  }
}

function clearFields() {
  $title.val('');
  $url.val('');
}

function counter() {
  var $unread = $('#unread-bkm');
  var $read = $('#read-bkm');
  var $saved = $('#saved-bkm');
  var unread = $('.unread').length;
  var read = $('.read').length;
  var total = $('li').length;
  $unread.text(unread - read);
  $read.text(read);
  $saved.text(total);
}

function validateInputs() {
  if ($title.val() === '' || $url.val() === '') {
   alert("Please enter you bookmark information!");
  } else {
      addBkm();
  }
}

function addBkm() {
  $('ul').prepend(`
    <li class="new-bkm unread">
      <h2>${$title.val()}</h2><hr>
      <a href="${$url.val()}" target="_blank"><span class="url-span">${$url.val()}</span></a><hr id="hr-lower">
      <button class="unread-btn" type="button" name="button">Read</button>
      <button class="delete" type="button" name="button">Delete</button>
    </li>
    `)
  }

function revealCounter() {
  var $header = $('header');
  if ($('li').length >= 1) {
    $header.delay(600).slideDown(500);
  } else {
    $header.slideUp(500);
  }
}

function revealRemoveReadBtn() {
  if ($('.read').length >= 1) {
    $trashBtn.removeClass('hide');
  } else {
    $trashBtn.addClass('hide');
  }
}

function submitBkm() {
  var url = $url.val();
  if (!validUrl(url)) {
    clearFields();
    reset();
    return alert('Please enter a valid URL address. You will need to add "http://", "https://" or "ftp://" to the beginning of your Website URL.');
  } else {
    validateInputs();
    clearFields();
    counter();
    reset();
  }
}

function validUrl(url) {
  var urlTest = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return urlTest.test(url);
}

function reset() {
  $title.focus();
  $create.attr('disabled', true);
}
