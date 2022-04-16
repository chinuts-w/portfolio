function fadeIn(a){
    var judge = 1;
    var deltaTime = 1;
    var maxTime = 100;
    var opacity = 0;
    var deltaOpacity = deltaTime / maxTime;
    a.style.display = "block";
    a.style.opacity = "0";
    var id = setInterval(function(){
      opacity = opacity + deltaOpacity;
      a.style.opacity = opacity;
      judge = 1 - opacity;
      if (judge < 0) {
        clearInterval(id);
      }
    },deltaTime);
  }
  function fadeOut(a){
    var opacity = document.defaultView.getComputedStyle(a, null).opacity;
    var deltaTime = 1;
    var maxxTime = 100;
    var deltaOpacity = deltaTime / maxxTime;
    var id = setInterval(function(){
      opacity = opacity - deltaOpacity;
      a.style.opacity = opacity;
      if(opacity < 0){
        a.style.display = 'none';
        clearInterval(id);
      }
    },deltaTime);
  }

  (function(){
    'use strict'
    var faBars = document.getElementsByClassName('fa-bars');
    var overlay = document.getElementsByClassName('overlay');
    var faTimesCircle = document.getElementsByClassName('fa-times-circle');
    for (var i = 0; i < faBars.length; i++) {
      faBars[i].addEventListener('click',function(){
        for (var j = 0; j < overlay.length; j++) {
          fadeIn(overlay[j]);
        }
      },false);
    }
    for (var i = 0; i < faTimesCircle.length; i++) {
     faTimesCircle[i].addEventListener('click',function(){
       for (var j = 0; j < overlay.length; j++) {
         fadeOut(overlay[j]);
       }
     },false);
    }

    var overlayWard = document.getElementsByClassName('overlay-ward');
    for (var i = 0; i < overlayWard.length; i++) {
      var listItem = overlayWard[i].getElementsByTagName('li');
      for (var j = 0; j < listItem.length; j++) {
        listItem[j].addEventListener('click',function(){
          var target = this.getAttribute('data-target');
          var targetObject = document.getElementsByClassName(target);
          for (var k = 0; k < targetObject.length; k++) {
            var child = targetObject[k].parentNode.children;
            for (var l = 0; l < child.length; l++) {
              child[l].classList.remove('active');
            }
            targetObject[k].classList.add('active');
            fadeOut(overlay[0]);
          }
        },false);
      }
    }

  })();
