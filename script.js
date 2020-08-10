var body = {
  setColor: function(color) {
    var target = document.querySelector('body');
    target.style.color=color;
    target.style.borderColor=color;
  },
  setBackgroundColor: function(color) {
    var target = document.querySelector('body');
    target.style.backgroundColor=color;
  }
}

var links = {
  setColor: function (color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i++;
    }
  }
}

function syncValue(mode) {
  var tlist = document.querySelectorAll('.toggle');
  for(i = 0; i < tlist.length; i++){
    tlist[i].value = mode;
  }
}

function nightDayHandler(self) {
  if(self.value == '다크 모드') {
    body.setColor('white');
    body.setBackgroundColor('black');
    links.setColor('white');
    syncValue('기본 모드');
  }
  else {  // self.value == '기본모드'
    body.setColor('black');
    body.setBackgroundColor('white');
    links.setColor('black');
    syncValue('다크 모드');
  }
}
