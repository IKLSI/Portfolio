var redirectagent = navigator.userAgent.toLowerCase();
var redirect_devices = ['vnd.wap.xhtml+xml', 'sony', 'symbian', 'nokia', 'samsung', 'mobile', 'windows ce', 'epoc', 'opera mini', 'nitro', 'j2me', 'midp-', 'cldc-', 'netfront', 'mot', 'up.browser', 'up.link', 'audiovox', 'blackberry', 'ericsson', 'panasonic', 'philips', 'sanyo', 'sharp', 'sie-', 'portalmmm', 'blazer', 'avantgo', 'danger', 'palm', 'series60', 'palmsource', 'pocketpc', 'smartphone', 'rover', 'ipaq', 'au-mic', 'alcatel', 'ericy', 'vodafone', 'wap1', 'wap2', 'teleca', 'playstation', 'lge', 'lg-', 'iphone', 'android', 'htc', 'dream', 'webos', 'bolt', 'nintendo'];
for (var i in redirect_devices) {
	if (redirectagent.indexOf(redirect_devices[i]) != -1) {
		location.replace("./indexTelephone.html");
	}
}