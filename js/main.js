window.onload = function  () {
	console.log('欢迎欢迎！');
	var headImg = document.getElementsByClassName('head');
	// headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head2.jpg)";

	var weekday = new Date().getDay();
	switch (weekday){
		1: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head.jpg)";break;
		2: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head1.jpg)";break;
		3: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head2.jpg)";break;
		4: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head3.jpg)";break;
		5: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head4.jpg)";break;
		default: headImg[0].style.backgroundImage = "url(http://www.siamess.cn/img/head.jpg)";break;
	}
}