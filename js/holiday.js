
//轮播
window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('td');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 7;
    var animated = false;
    var interval = 6825;
    
    function showButton () {
        for(var i = 0;i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 500;
        var interval = 20;
        var speed = offset/(time/interval);
        var left = parseInt(list.style.left) + offset;
        function go() {
            if ((speed < 0 && parseInt(list.style.left) > left) || (speed > 0 && parseInt(list.style.left) < left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, interval);
            }
            else {
                list.style.left = left + 'px';
                if (left > -975) {
                    list.style.left = -6825 + 'px';
                }
                if (left < -6825) {
                    list.style.left = -975 + 'px';
                }
                animated=false;
            }
        }
        go();   
    }

    next.onclick = function() {
        if (animated) {
            return;
        } 
        if (index == 7) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-975);
        showButton(); 
    }
    var time = setInterval(function(){
        next.onclick();
    },3000);

    prev.onclick = function() {
        if (animated) {
            return;
        } 
        if (index == 1) {
            index = 7;
        }
        else {
            index -= 1;
        }
        animate(975);
        showButton();               
    }

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -975 * (myIndex - index);
            animate(offset);
            index = myIndex;
            showButton();
            
        }
    }
    
}


// 进度条那里
function jinDuTiaoIn(x){
    x.style.backgroundColor="#F3F3F3";
}
function jinDuTiaoOut(x){
    x.style.backgroundColor="#FFFFFF";
}
// 搜索框下面
function showdiv(s){
    if (s=="1") {
        document.getElementById("content1").className="contentin contentfirst";
        document.getElementById("content2").className="contentfirst";
        document.getElementById("content3").className="contentfirst";
        document.getElementById("li2");
        document.getElementById("li1");
        document.getElementById("li3");
    }
    else if (s=="2") {
        document.getElementById("content1").className="contentfirst";
        document.getElementById("content2").className="contentin contentfirst";
        document.getElementById("content3").className="contentfirst";
        document.getElementById("li2");
        document.getElementById("li1");
        document.getElementById("li3");
    }
    else{
        document.getElementById("content1").className="contentfirst";
        document.getElementById("content2").className="contentfirst";
        document.getElementById("content3").className="contentin contentfirst";
        document.getElementById("li2");
        document.getElementById("li1");
        document.getElementById("li3");
    }
}
























// bottom那里
function bottomPictureIn(x){
    x.style.backgroundColor="#FF5A00";
    x.style.boxShadow="0 0 15px #FF5A00";
}
function bottomPictureOut(x){
    x.style.backgroundColor="#FFFFFF";
    x.style.boxShadow="0 0 0 #FF5A00";
}



