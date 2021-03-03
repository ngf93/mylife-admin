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


/* adding new inputs */
$(document).ready( function() {
  $(".add-input").click(function(){
    let cloned_input = $(this).prev('.input-clone').clone(true);
    $(this).after(cloned_input);
  });
});


/* img upload */
$(document).ready( function() {
  $(document).on('change', '.img_upload_box input[type=file]', function(){
      let maxFileSize = 2 * 1024 * 1024;
      let imgUpload = $(this).prev("img");
      let parentDiv = $(this).parents('.img-group');

      let file = this.files[0];
      if ( !file.type.match(/image\/(jpeg|jpg|png|gif|svg)/) ) {
      alert( 'Фотография должна быть в формате jpg, png или gif' );
      }
      else if ( file.size > maxFileSize ) {
      alert( 'Размер фотографии не должен превышать 2 Мб' );
      }
      else {
      preview(file);
      parentDiv.append('<div class="img_upload_box"><img src=""><input type="file"><button type="button" class="del_upload_box"></button></div>');
      /* Создание превью */
      function preview(file) {
          let reader = new FileReader(), img;
          reader.addEventListener("load", function(event) {
          imgUpload.css('opacity', '1');
          imgUpload.attr('src', event.target.result);
          });
          reader.readAsDataURL(file);
      };
      }
  });
  $(document).on('click', '.del_upload_box', function(){
      let parentGroup = $(this).parents('.img-group');
      $(this).parent('.img_upload_box').remove();
      let l = parentGroup.find("div.img_upload_box").length;
      if(l == 0){
      console.log('in');
      parentGroup.append('<div class="img_upload_box"><img src=""><input type="file"><button type="button" class="del_upload_box"></button></div>');
      }
  });
  });