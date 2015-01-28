//window.onload = function() {
//	InitArticalMargin();
//}

var InitArticalMargin = function() {
	var MenuItem = document.getElementById("menu");
	var TitleItem = document.getElementById("titles");
	var MenuClick = document.getElementById("click_menu");
	MenuClick.onmouseup = function() {
		ToggleMenuItem();
		if (HasClass(TitleItem, "title_narrow")) {
			ToggleTitlesItem();
		}
	}
	TitleItem.onmouseup = function() {
		ToggleTitlesItem();
		if (!HasClass(MenuItem, "menu_narrow")) {
			ToggleMenuItem();
		}
	}
}

var mouse_menu_fun = function() {
	var MenuMouseon = document.getElementById("click_menu");
	MenuMouseon.style.display = "";
}

var mousemove_menu = function() {
	var MenuMousemove = document.getElementById("click_menu");
	MenuMousemove.style.display = "none";
}

var mousefun = function() {
	var TitleNum = event.target.id;
	var IdNum = TitleNum.charAt(11);
	for (var j = 1; j < 7; j++) {
		if (j != IdNum) {
			var ContentNum = "content_id_" + j;
			var Content = document.getElementById(ContentNum);
			Content.style.display = "none";
		} else {
			var ContentNum = "content_id_" + IdNum;
			var Content = document.getElementById(ContentNum);
			Content.style.display = "";
			for (var i = 1; i < 4; i++) {
				var CommentsColorId = "commends_communication_" + IdNum + "_" + i;
				var CommentsColorAfterId = "commends_communication_color_" + IdNum + "_" + i;
				var CommentsColor = document.getElementById(CommentsColorId);
				var CommentsColorAfter = document.getElementById(CommentsColorAfterId);
				var BgColor = GetRandomColor();
				CommentsColor.style.backgroundColor = BgColor;
				CommentsColorAfter.style.borderRightColor = BgColor;
			}
		}
	}
}

var GetRandomColor = function() {
	var arr = ["#fde8fd","#f1defd","#fddef0","#fcd5d5","#fce8d5","#fcfad5","#f2fcd5","#dffcd5","#fcd6e7","#effcd6","#d6fcf3","#d5ebfc","#fec1fd"];
	var index = Math.floor((Math.random() * arr.length));
	return arr[index];
}

var ToggleMenuItem = function() {
	var MenuItem = document.getElementById("menu");
	var ArticalItem = document.getElementById("article");
	ToggleClass(MenuItem, "menu_narrow");
	ToggleClass(ArticalItem, "article_wide");
}

var ToggleTitlesItem = function() {
	var TitleItem = document.getElementById("titles");
	var Content = document.getElementById("content");
	ToggleClass(TitleItem, "title_narrow");
	ToggleClass(Content, "content_wide");
}

var Rotate = document.getElementById("rotate_title"),n=0,rotINT;
var RotateTitle = function() {
	var Rotate = document.getElementById("rotate_title");	
	clearInterval(rotINT)
	rotINT=setInterval("startRotate()",100)
}

var RotateTitleEnd = function() {
	var Rotate = document.getElementById("rotate_title");	
	clearInterval(rotINT)
	rotINT=setInterval("endRotate()",1)
}

function HasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function AddClass(obj, cls) {
	if (!this.HasClass(obj, cls)) {
		obj.className += " " + cls;
	}
}

function RemoveClass(obj, cls) {
	if (HasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

function ToggleClass(obj, cls) {
	if (HasClass(obj, cls)) {
		RemoveClass(obj, cls);
	} else {
		AddClass(obj, cls);
	}
}

var startRotate = function(){
	n = n + 1
	Rotate.style.transform = "rotate(" + n + "deg)"
	Rotate.style.webkitTransform = "rotate(" + n + "deg)"
	Rotate.style.OTransform = "rotate(" + n + "deg)"
	Rotate.style.MozTransform = "rotate(" + n + "deg)"
	if (n == 180 || n == 360) {
		clearInterval(rotINT)
		if (n == 360) {
			n = 0
		}
	}
}

var endRotate = function() {
	n = n + 1
	Rotate.style.transform = "rotate(" + n + "deg)"
	Rotate.style.webkitTransform = "rotate(" + n + "deg)"
	Rotate.style.OTransform = "rotate(" + n + "deg)"
	Rotate.style.MozTransform = "rotate(" + n + "deg)"
	if (n == 90) {
			n = 0;
	}
}
