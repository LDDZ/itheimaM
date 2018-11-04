window.onload=function(){
    //获取弹出层
    var Win=document.querySelector('.win');
    //获取框
    var WinBox=Win.querySelector('.win_box');
    //获取所有的删除按钮
    var delList=document.querySelectorAll('.delBox');
    //记录当前点击的是哪个按钮
    var delBtn=null;
    for(var i=0;i<delList.length;i++){
        delList[i].onclick=function(){
            //1.显示弹出层
            Win.style.display="block";
            //2.做动画
            WinBox.classList.add('bounceInDown');
            // 删除盒子需要做
            console.log(this);
            delBtn=this;
            var up=delBtn.querySelector('.up');
            console.log(up);
            // 加过渡
            up.style.webkitTransition="all 1s";
            up.style.transition="all 1s";
            //定义旋转原点
            up.style.webkitTransformOrigin="0 5px";
            up.style.transformOrigin="0 5px";
            // 加改变
            up.style.webkitTransform="rotate(-30deg) translateY(2px)";
            up.style.transform="rotate(-30deg) translateY(2px)";
        }
    }
    //4.点击取消按钮，关闭弹出层
    WinBox.querySelector('.cancel').onclick=function(){
        Win.style.display="none";
        WinBox.classList.remove('bounceInDown');
        //当前点击过
        if(delBtn){
            var up=delBtn.querySelector('.up');
            up.style.webkitTransform="none";
            up.style.transform="none";
        }
    }
};