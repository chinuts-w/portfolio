//javascriptで書く
(function(){
  'use strict';

    var bar = document.getElementById('bar-icon');
    bar.addEventListener('click',function(){
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
    },false);


    var close = document.getElementById('close-icon');
    close.addEventListener('click',function(){
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    },false);


    var overlaylist = document.getElementById('overlay-list');
    var list = overlaylist.children;
    for(var j = 0; j < list.length; j++){
        list[j].addEventListener('click',function(){
            var target = this.getAttribute('data-target');　
            var targetElement = document.getElementById(target);
            for(let k = 0; k < targetElement.length; k++){ 　　
                var parent = targetElement[k].parentNode;  
                var children = parent.children;
                for(let l = 0; l < children.length; l++){
                    children[l].style.display = 'none';
                };
                targetElement[k].style.display = 'flex';
                var overlay = document.getElementById('overlay');
                overlay.style.display = 'none';
            };
        },false);
    };

    var overlaylist = document.getElementById('overlay-list');　//ulの取得
    var list = overlaylist.children;      //overlaylistの子要素取得
    for(var j = 0; j < list.length; j++){　　//listをjまで繰り返す
        list[j].addEventListener('click',function(){　　//jのイベントをつける、クリックした時
            var target = this.getAttribute('data-target');　　//this(list[j])の属性deta-target（カスタムデータ属性）を取得
            var targetElement = document.getElementsByClassName(target); //data-target、targetの取得
            for(let k = 0; k < targetElement.length; k++){ 　　//取得したtarget
                var parent = targetElement[k].parentNode;  
                var children = parent.children;
                for(let l = 0; l < children.length; l++){
                    children[l].style.display = 'none';
                };
                targetElement[k].style.display = 'flex';
                var overlay = document.getElementById('overlay');
                overlay.style.display = 'none';
            };
        },false);
    };

})();


//仮jqueryです
$('#bar-icon').on('click',function(){
  $('#overlay').fadeIn();
  $('#close-icon img').on('click',function(){
    $('#overlay').fadeOut();
  });
});

$('#overlay-list li').on('click',function(){
  var target = $(this).attr('data-target');
  target = '#' + target;
  $(target).addClass('active').fadeIn().siblings().removeClass('active').hide();
  $('#overlay').fadeOut();
});
