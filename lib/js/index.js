$(document).ready(()=>{
	


	// let w_h = $(window).height() - 142
	// $('.step').css({
	// 	'minHeight': w_h +'px',
	// })
	// $('.solution').css({
	// 	'minHeight': w_h +'px',

	// })
	// $('.news').css({
	// 	'minHeight': w_h +'px',
	// })
	// $('.details').css({
	// 	'minHeight': w_h +'px',
	// })

	// $('.Join_us').css({
	// 	'minHeight': w_h +'px',
	// })









// function getClientHeight()
// {
//   var clientHeight=0;
//   if(document.body.clientHeight&&document.documentElement.clientHeight)
//   {
//   var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
//   }
//   else
//   {
//   var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
//   }
//   return clientHeight;
// }




	let iframeH = $(window).height()
	let iframeW = $(window).width()
	$('#iframe').css({
		'width': iframeW,
		'height': iframeH,
		'position': 'fixed',
		'top': '100px',
		'left': '0',
		'z-index': '-44',
	})
	// offset
	
})