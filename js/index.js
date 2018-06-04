onload = function(){
	var box10 = document.querySelector("#box10");
	var oli = box10.querySelectorAll("a");
	var box = document.getElementById("box");
	for(var i=0;i<oli.length;i++){
		oli[i].onmouseover = function(){
			var target = parseInt(this.offsetLeft);
			console.log(target)
			move(box,target);
		}
	}
	//obj是节点对象，
	//target是目标值
function move(obj,target){
	console.log(target);
	clearInterval(obj.timer);
	var speed = 0;
	obj.timer = setInterval(function(){
			//目标值
			target = target;
			//获取box的初始位置
			var start = obj.offsetLeft;
			//给一个越来越小的速度
			speed+=(target-start)/5;
            speed*=0.7;
            console.log(target)
            console.log(speed);
            console.log(start);
			//开始运动
		    obj.style.left = start+speed+"px";
			//结束运动
			if(obj.offsetLeft==target){
				console.log(obj.offsetLeft);
				clearInterval(obj.timer);
			}
		},100)
	}
}
