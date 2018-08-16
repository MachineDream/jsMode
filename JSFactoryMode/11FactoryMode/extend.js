/**
	 * 创建Extend函数为了程序中石所有的集成操作
	 */
	function extend(subClass,superClass){
		//1.叫子类原型类属性等于父类的原型属性
		//初始化一个中间空对象,为了转换主父类关系
		var F = function(){};
		F.prototype = superClass.prototype;
		//2.让子类集成F
		subClass.prototype = new F();
		subClass.prototype.constructor = subClass;
		//3.为子类增加属性superClass
		subClass.superClass = superClass.prototype;
		//4.增加一个保险,就算你是的原型类是超类(Object) 那么也要把你的构造函数级别讲下来
		if(superClass.prototype.constructor == Object.prototype.constructor){
			superClass.prototype.constructor = superClass;
		}
	}