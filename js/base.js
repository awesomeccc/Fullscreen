/**
 * Created by Administrator on 2017/8/14.
 */
/*换肤*/
window.onload=function(){
   /* var pic1 = document.getElementById("pic1");*/
    var pic2 = document.getElementById("pic2");
    var pic3 = document.getElementById("pic3");
    var pic4 = document.getElementById("pic4");
    var pic5 = document.getElementById("pic5");
    var pic6 = document.getElementById("pic6");
    var pic7 = document.getElementById("pic7");
    var pic8 = document.getElementById("pic8");
    var pic9 = document.getElementById("pic9");


    /*pic1.onclick = function(){
        document.body.style.backgroundImage = "url(images/1.png)";
    };
    pic2.onclick = function(){
        document.body.style.backgroundImage = "url(images/2.jpg)";
    };
    pic3.onclick = function(){
        document.body.style.backgroundImage = "url(images/3.jpg)";
    };
    pic4.onclick = function(){
        document.body.style.backgroundImage = "url(images/4.jpg)";
    };
    pic5.onclick = function(){
        document.body.style.backgroundImage = "url(images/5.jpg)";
    };
    pic6.onclick = function(){
        document.body.style.backgroundImage = "url(images/6.jpg)";
    };*/
    var scroll = document.getElementById("scroll");
    var ul = scroll.children[0];
    var num = 0; //控制左侧值  left
    var timer = null;  // 定时器
    timer = setInterval(autoPlay,20);
    function autoPlay() {
        num--;
        //console.log(num);
        num<=-920 ? num = 0 : num;
        ul.style.left = num + "px";
    }
    scroll.onmouseover = function() {  // 鼠标经过大盒子  停止定时器
        clearInterval(timer);
    };
    scroll.onmouseout = function() {
        timer = setInterval(autoPlay,20);  // 开启定时器
    };
    // 封装
    function fn(pic,bg){
        var obj=document.getElementById(pic);
       obj.onclick=function () {
           document.body.style.backgroundImage = bg;
       }
    }
    fn("pic1","url(images/1.jpg)");
    fn("pic2","url(images/2.jpg)");
    fn("pic3","url(images/3.jpg)");
    fn("pic4","url(images/4.jpg)");
    fn("pic5","url(images/5.jpg)");
    fn("pic6","url(images/6.jpg)");
    fn("pic7","url(images/1.jpg)");
    fn("pic8","url(images/2.jpg)");
    fn("pic9","url(images/3.jpg)");
    /*遮罩*/
    var login=document.getElementById("login");
    var mask=document.getElementById("mask");
    var mask_top=document.getElementById("mask_top");
    var close_login=document.getElementById("close_login");
    login.onclick=function(){
        mask.style.display="block";
        mask_top.style.display="block";
    };
    close_login.onclick=function(){
        mask.style.display="none";
        mask_top.style.display="none";
    };
    /*日历*/
    var time_box = document.getElementById("time_box");
    var time_boys = time_box.children;
//日期函数
    var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    var date = new Date();   // 声明日期函数
    time_boys[0].innerHTML = date.getFullYear()+"年"+ (date.getMonth()+1) +
        "月" + date.getDate() + "日" + "  " + arr[date.getDay()];
    /*time_boys[1].innerHTML = date.getDate();  // 今天的日子*/
 /*   问候*/
    var hello = document.getElementById("hello");
    var child = hello.children;
    var date = new Date();
    var hours = date.getHours();
    if(hours<9){
        child[0].innerHTML = "Good morning, my friends" ;
        /*child[0].style.backgroundImage = " url(images/hello/1.gif)";*/
    }else if(hours <12){
        child[0].innerHTML = "上午该干嘛呢、、、" ;
       /* child[0].style.backgroundImage = " url(images/hello/2.jpg)";*/
    }else if(hours <18){
        child[0].innerHTML = "下午睡个懒觉吧、" ;
       /* child[0].style.backgroundImage = " url(images/hello/4.jpg)";
        document.body.style.backgroundImage = " url(images/1.jpg)";*/
    }else if(hours <=23){
        child[0].innerHTML = "夜深人静了。要睡觉了哦" ;
       /* child[0].style.backgroundImage = " url(images/hello/5.jpg)";*/
    }
};
/*遮罩*/
/*window.onload=function(){
   var login=document.getElementById("login");
   var mask=document.getElementById("mask");
   var mask_top=document.getElementById("mask_top");
   var close_login=document.getElementById("close_login");
   login.onclick=function(){
       mask.style.display="block";
       mask_top.style.display="block";
   };
   close_login.onclick=function(){
       mask.style.display="none";
       mask_top.style.display="none";
   }
};*/
/*/!*日历*!/
var time_box = document.getElementById("time_box");
var time_boys = box.children;
//日期函数
var arr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var date = new Date();   // 声明日期函数
time_boys[0].innerHTML = date.getFullYear()+"年"+ (date.getMonth()+1) +
    "月" + date.getDate() + "日" + "  " + arr[date.getDay()];
time_boys[1].innerHTML = date.getDate();  // 今天的日子*/
