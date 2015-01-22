window.onload = function() {
	initArticalMargin();
}

var initArticalMargin = function() {
	var menuItem = document.getElementById("menu");
	var titleItem = document.getElementById("titles");
	
	menuItem.onmouseup = function() {
		toggleMenuItem();
//		console.log(menuItem.style.opacity);
//		if(menuItem.style.opacity==100){
//			menuItem.style.opacity=0;
//		}else{
//			menuItem.style.opacity=100;
//		}
		if(hasClass(titleItem,"title_narrow")){
			toggleTitlesItem();
		
		}
	}
	titleItem.onmouseup = function() {
		toggleTitlesItem();
		if(!hasClass(menuItem,"menu_narrow")){
			toggleMenuItem();
		}
	}
}

var toggleMenuItem = function(){
	var menuItem = document.getElementById("menu");
	var articalItem = document.getElementById("article");
	toggleClass(menuItem, "menu_narrow");
	toggleClass(articalItem, "article_wide");
}

var toggleTitlesItem = function(){
	var titleItem = document.getElementById("titles");
	var content = document.getElementById("content");
	toggleClass(titles, "title_narrow");
	toggleClass(content, "content_wide");
}

function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
	if (!this.hasClass(obj, cls)) {
		obj.className += " " + cls;
	}
}

function removeClass(obj, cls) {
	if (hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

function toggleClass(obj, cls) {
	if (hasClass(obj, cls)) {
		removeClass(obj, cls);
	} else {
		addClass(obj, cls);
	}
}