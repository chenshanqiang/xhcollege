/*
* @Author: Administrator
* @Date:   2017-11-08 11:18:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-08 18:43:35
*/
function show(id,idimg) {
	if (document.getElementById(id).style.display == 'none') {
		document.getElementById(id).style.display = 'block';
		document.getElementById(idimg).src='img/jian.png'
	} else {
		document.getElementById(id).style.display = 'none';
		document.getElementById(idimg).src='img/jia.png'
	}
}
function status(id,idimg) {
	if (document.getElementById(id).style.display == 'none') {
		document.getElementById(id).style.display = 'block';
		document.getElementById(idimg).src='img/up.png'
	} else {
		document.getElementById(id).style.display = 'none';
		document.getElementById(idimg).src='img/down.png'
	}
}