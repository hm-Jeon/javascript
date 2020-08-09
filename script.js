function nightDayHandler(self) {
  var tlist = document.querySelectorAll('.toggle');
  var target = document.querySelector('body');
  if(self.value === '나이트 모드') {
    target.style.backgroundColor='black';
    target.style.color='white';
    target.style.border='2px solid white';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = 'white';
        i++;
    }

    for(i = 0; i < tlist.length; i++){
      tlist[i].value = '기본 모드';
    }
  }
  else {
    target.style.backgroundColor='white';
    target.style.color='black';
    target.style.border='2px solid black';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = 'black';
      i++;
    }

    for(i = 0; i < tlist.length; i++){
      tlist[i].value = '나이트 모드';
    }
  }
}
