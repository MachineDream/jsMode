//定义一个接口类
	var Interface = function(name,methods){
		if(arguments.length != 2){
			alert("interface must have two paramters...");
		}
		this.name = name;//这个是接口的名字
		this.methods = [];//定义个空数组来转载函数名
		for (var i = 0; i < methods.length; i++) {
			if(typeof methods[i] != "string"){
				alert("method name must is String ...")
			}else{
				this.methods.push(methods[i])
			}
		}
	}
	//定义接口的一个静态方法来实现接口与实现类的直接检验
	//静态方法不要写成Interface.prototype.* 因为这是写到接口原型连上的
	//我们要把静态的函数直接写到类层次上
	Interface.ensureImplements = function(object){
		if(arguments.length<2){
			alert("必须最少是2个参数");
			return false;
		}
		//遍历
		for (var i = 1; i < arguments.length; i++) {
			var inter = arguments[i];
			//如果你是接口就必须是Interface类型的
			if(inter.constructor != Interface){
				throw new Error("if is interface class must is Interface type");
			}
			//遍历函数集合并分析
			for (var j = 0; j < inter.methods.length; j++) {
				var method = inter.methods[j];
				//实现类中必须有方法名字 和 接口中所有的方法名项目
				if(!object[method] || typeof object[method] != "function"){
					throw new Error("实现类并且没有完全实现接口中的所有方法...");
				}
			}
		}
	}