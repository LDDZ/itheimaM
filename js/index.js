//轮播图

// ------------获取相关元素-------------
//获取整个轮播图模块sliderDIV
var sliderDiv = document.querySelector(".slider");
// 获取一组带图像的超链接
var imagesA = document.getElementById("images").children;
//获取一组li文本
var txtList = document.querySelector(".txt-box").children;
//上一张下一张控制按钮
var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');



// -------------初始化控制变量-------------
//初始化当前显示的图片/文本编号
var currentNo = 0;
const nodeLength = 5;


//--------------构建功能函数---------------
//计时器换片函数，间隔1S被调用,显示1张图像，其余图像隐藏。文本轮流高亮
function changeImg() {
    // 排他原理1 ，将同类设置为统一状态，
    for (var i = 0; i < nodeLength; i++) {
        // 同类图片透明度0（.hiddenImg)
        imagesA[i].className = "hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className = "txtItem normalColor";
    }
    //排他原理2，突出自己，当前图片透明度1(.displayImg)3
    imagesA[currentNo].className = "displayImg";
    // 排他原理2，文本高亮
    txtList[currentNo].className = "txtItem heighlightColor";
}

//左向控制编号变化
function leftImg() {     
    if (currentNo > 0) { currentNo--; }
    else {
        currentNo = 4;
    } 
}
//右向控制编号变化
function rightImg() {
    if (currentNo < 4) { currentNo++; }
    else {
        currentNo = 0;
    }  
}

//切换到定编号文本/图片
function gotoImg() {
    // 获得当前显示图像的编号/文本编号  this 是当前事件发生的本体
    // console.log(this.no);
    currentNo = this.no;
    //调用更换图片/文本函数
    changeImg();
}

// 换向换片/文本
function leftImgGo(){
    leftImg();
    changeImg();
}
function rightImgGo(){
    rightImg();
    changeImg();
}


// ---------启动计时器--------------
//网页加载后启动定时器，每隔1秒调用changeImgGo（）换片
var timer = window.setInterval(rightImgGo, 2000);


// ----------为各元素添加事件------------------
//为sliderDIV注册移入移出事件
sliderDiv.addEventListener('mouseover', function() {window.clearInterval(timer);});
sliderDiv.addEventListener('mouseout', function() {timer = window.setInterval(rightImgGo, 2000);});


// 为所有文本li注册鼠标移入事件，移入之后，当前li高亮，跳转到对应图片
for (var i = 0; i < txtList.length; i++) {
    txtList[i].addEventListener('mouseover', gotoImg);
    //添加自定义属性no 记录当前li的编号
    txtList[i].no = i;

}

// 上下一张注册事件
leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);


