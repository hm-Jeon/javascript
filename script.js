function setBodyColor(bg, fg) {
  var target = document.querySelector('body');
  target.style.backgroundColor=bg;
  target.style.color=fg;
  target.style.borderColor=fg;
}

function setLinkColor(color) {
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i < alist.length){
      alist[i].style.color = color;
      i++;
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
    setBodyColor('black', 'white');
    setLinkColor('white');
    syncValue('기본 모드');
  }
  else {  // self.value == '기본모드'
    setBodyColor('white', 'black');
    setLinkColor('black');
    syncValue('다크 모드');
  }
}
