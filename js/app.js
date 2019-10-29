$(function() {
  $("#navbarDropdown").click(function(){
    $("#dropdown").toggle();
  });


  $(".nav-link").removeClass("disabled");

  $("#Search").keyup(function(){
    $("#searchResult").html($(this).val())
  })

  $("#title").click(function () {
    var num= Math.floor((Math.random() * 80) + 1);
    $("#changeTitle").text("Web Developer" + num)

  })

  $(".list-group li").click(function(){
    $(this).siblings("li").removeClass("active");
    $(this).addClass('active');
  })

  $("#playVideo").click(function(){
    $('#video').get(0).play()
    setTimeout(function(){
      $('#video').get(0).pause()
    }, 11000);
  })


  $('#home a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $("#showModal").click(function(){
    $("#modal").modal()
  })

  $(function () {
    $('[data-toggle="popover"]').popover()
  })

  $('.popover-dismiss').popover({
    trigger: 'focus'
  })
  setInterval(function () {
    var width = parseInt($('#progressBar')[0].style.getPropertyValue('width'));

    if (width >= 100) {
       $('#progressBar').css('width', '0%');
     }
    else {
      $('#progressBar').css('width', '100%');
    }
  }, 1000);

  var isPlay = true
  setInterval(function () {
    if (isPlay) {
        $('#spinner').css('animation-play-state', 'paused');
    } else {
      $('#spinner').css('animation-play-state', 'initial');
    }
    isPlay = !isPlay;
  }, 5000);
});
