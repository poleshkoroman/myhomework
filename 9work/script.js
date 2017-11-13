var point = {
	_x: 0,
	_y: 0
};

Object.defineProperty(point, "x", {
	get: function(){
		return this._x;
	},
	set: function(val){
		if ((/^[0-9]{1,}$/).test(val))
			this._x = Number(val);
	}
})

point.__defineGetter__("y", function(){
	return this._y;
})

point.__defineSetter__("y", function(val){
	if ((/^[0-9]{1,}$/).test(val)) this._y = Number(val);
})