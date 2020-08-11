var body = {
  setColor: function(color) {
    // var target = document.querySelector('body');
    // target.style.color=color;
    // target.style.borderColor=color;
    $('body').css('color', color);
    $('body').css('borderColor', color);
  },
  setBackgroundColor: function(color) {
    // var target = document.querySelector('body');
    // target.style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  }
}

var links = {
  setColor: function (color) {
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i++;
    // }
    $('a').css('color', color);
  }
}

var button = {
  syncValue: function(mode) {
    $('.toggle').val(mode);
  },
  hover: function(bgcolor, color) {
    $(".toggle").hover(function(){
      $(this).css("backgroundColor", bgcolor);
      $(this).css("color", color);
      if($('.toggle').val() == '기본 모드') {
        $(this).css("borderColor", color);
      }
    },
    function(){
      $(this).css("background-color", color);
      $(this).css("borderColor", bgcolor);
      $(this).css("color", bgcolor);
    });
  }
}

function nightDayHandler(self) {
  if(self.value == '다크 모드') {
    body.setColor('white');
    body.setBackgroundColor('black');
    links.setColor('white');
    button.syncValue('기본 모드');
    button.hover('white', 'black');
  }
  else {  // self.value == '기본모드'
    body.setColor('black');
    body.setBackgroundColor('white');
    links.setColor('black');
    button.syncValue('다크 모드');
    button.hover('black', 'white');
  }
}
