module.exports = new function(){
	this.uuid = function(){
		const S4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}
		return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4() +S4());
	};
	this.shortUuid = function(){
		const S4 = function(){
			return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
		}
		return (S4()+S4());
	};
};
