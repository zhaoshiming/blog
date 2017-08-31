window.onload = function  () {
	console.log('欢迎欢迎！');
	var headImg = document.getElementsByClassName('head');
	// headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head2.jpg)";

	var weekday = new Date().getDay();
	switch (weekday){
		case 1: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head.jpg)";break;
		case 2: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head1.jpg)";break;
		case 3: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head2.jpg)";break;
		case 4: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head3.jpg)";break;
		case 5: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head4.jpg)";break;
		default: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head.jpg)";break;
	}
}