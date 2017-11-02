var myFW = {
	append: function(val1, val2){
		return val1.appendChild(val2)
	},
	prepend: function(val1, val2){
		return val2.parentNode.InsertBefore(val1, val2)
	},
	remove: function(val){
		return val.remove()
	},
	create: function(val){
		return document.createElement(val)
	},
	get: {
		byId: function(id){
			return document.getElementById(id)
		},
		byTag: function(name,pos){
			return document.getElementsByTagName(name)[pos]
		},
		byClass: function(cl, pos){
			return document.getElementsByClassName(cl)[pos]
		},
		bySelector: function(sel){
			return document.querySelector(sel)
		},
		bySelectorAll:function(sel, pos){
			return document.querySelectorAll(sel)[pos]
		}
	},
	event:{
		add: function(type, elem, f){
			if (typeof(elem.addEventListener) == "function"){
				return elem.addEventListener(type, f)
			}
			else {
				return elem.attachEvent("on"+type, f)
			}
		},
		remove: function(type, elem, f){
			if (typeof(elem.removeEventListener) == "function"){
				return elem.removeEventListener(type, f)
			}
			else {
				return elem.detachEvent("on"+type, f)
			}
		},
		dispatch: function(type, elem){
			return elem.dispatchEvent(type)
		}
	},
	width: function(elem){
		return elem.getBoundingClientRect().width;
	},
	height: function(elem){
		return elem.getBoundingClientRect().height;
	},
	addproperty: function(elem, property, value){
		return elem.style.cssText = property + ":" + value; 
	}
}