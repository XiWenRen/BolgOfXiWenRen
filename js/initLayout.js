window.onload = function() {
	init_artical_margin();
	comments_color();
}

var init_artical_margin = function() {
	var menu_item = document.getElementById("menu");
	var title_item = document.getElementById("titles");
	menu_item.onmouseup = function() {
		togglemenu_item();
		if (has_class(title_item, "title_narrow")) {
			toggle_titles_item();
		}
	}
	title_item.onmouseup = function() {
		toggle_titles_item();
		if (!has_class(menu_item, "menu_narrow")) {
			togglemenu_item();
		}
	}
}

var comments_color = function() {
	for (var i = 1; i < 4; i++) {
		var str1 = "commends_communication_" + i;
		var str2 = "commends_communication_color_" + i;
		var comments_color = document.getElementById(str1);
		var comments_color_after = document.getElementById(str2);
		var bg_color = get_random_color();
		comments_color.style.backgroundColor = bg_color;
		comments_color_after.style.borderRightColor = bg_color;
	}
}

var get_random_color = function() {
	return '#' +
		(function(color) {
			return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
		})('');
}

var togglemenu_item = function() {
	var menu_item = document.getElementById("menu");
	var articalItem = document.getElementById("article");
	toggle_class(menu_item, "menu_narrow");
	toggle_class(articalItem, "article_wide");
}

var toggle_titles_item = function() {
	var title_item = document.getElementById("titles");
	var content = document.getElementById("content");
	toggle_class(titles, "title_narrow");
	toggle_class(content, "content_wide");
}

function has_class(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function add_class(obj, cls) {
	if (!this.has_class(obj, cls)) {
		obj.className += " " + cls;
	}
}

function remove_class(obj, cls) {
	if (has_class(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}

function toggle_class(obj, cls) {
	if (has_class(obj, cls)) {
		remove_class(obj, cls);
	} else {
		add_class(obj, cls);
	}
}