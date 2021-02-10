/* current year */
$(document).ready( function() {
  var now = new Date();
  var cur_year = now.getFullYear();
  $("#year").html(cur_year);
});

$(function() {
  $(".quantity-arrow-plus").click(function() {
      var num = $(this).prev(".quantity-num");
      var num_val = num.val();
      num.val(+num_val + 1);
  });
  $(".quantity-arrow-minus").click(function() {
      var num = $(this).next(".quantity-num");
      var num_val = num.val();
      if (num_val > 1) {
        num.val(+num_val - 1);
      }
  });
});


/* mobile menu */
$(document).ready( function() {
  $('.show-aside').click(function(){
    let target = $(this).attr('data-target');
    $(target).css('left', '0');
  });

  $('.close-aside').click(function(){
    $(this).parents('aside').css('left', '-100%');
  });
});


/* file upload with preview list */
$('.input-upload').on('change', function() {
  var arrayFiles = this.files, // массив с выбранными фалами
      formItem = this.parentNode, // родительский элемент, для того чтобы вставить список с файлами
      listFiles = document.createElement('ul'), // список с файлами
      li = ''; // файлы
  // Если список с файлами уже вставлен в ДОМ, то удаляем его
  if (formItem.querySelector('.list-files')) {
    formItem.querySelector('.list-files').remove();
  }
  listFiles.className = 'list-files'; // добавим класс, чтобы было удобнее стилять
  for (var i = 0; i < arrayFiles.length; i++) {
    li += '<li>' + arrayFiles[i].name + '</li>'; // <li>Имя файла</li>
  }
  listFiles.innerHTML = li;
  formItem.appendChild(listFiles);  
});


/* modal window for publication */
$('#modal-publication').on('show.bs.modal', function (event) {
  let button = $(event.relatedTarget) // Button that triggered the modal
  let state = button.data('state') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  let modal = $(this);
  if(state == 'not-published') {
    modal.find('.mp-text').text('Вы уверены что хотите опубликовать?');
    modal.find('.mp-btn-toggle').html('Опубликовать');
  } else if(state == 'published') {
    modal.find('.mp-text').text('Вы уверены что хотите снять с публикации?');
    modal.find('.mp-btn-toggle').text('Снять с публикации');
  }
});

/* password button state change */
$(function () {
  $(".pass_btn").click(function(){
    let state = $(this).attr('data-state');
    if(state == 'invisible'){
      $(this).prev("input").attr('type', 'text');
      $(this).attr('data-state', 'visible');
    } else {
      $(this).prev("input").attr('type', 'password');
      $(this).attr('data-state', 'invisible');
    }
  });
});