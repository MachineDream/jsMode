/**
 * 工厂的目的在于判别接口最终使用的是那个类来实例化
 * 产生实例的过程不用new  关键字
 * 最终达到的效果是，多态，和类与类之间的松耦合
 */
(function(){
	var Pet = new Interface("Pet",["eat","run","sing","reginster"]);
	//宠物店
	var Petshop = function(){
		
	};
	Petshop.prototype = {
		//出售宠物的方法
		sellPetShop:function(kind){
			//宠物对象
			var pet;
			//种类
			switch(kind){
				case 'dog':
					pet = new Dog();
					break;
				case 'cat':
					pet = new Cat();
					break;
				case 'pig':
					pet = new Pig();
					break;
				default:
					pet = new Bird();
			}
			Interface.ensureImplements(pet,Pet);
			pet.eat();
			pet.reginster();
			return pet;
		}
	}
	//宠物基类
	function BasePet(){
		this.reginster = function(){
			document.write("宠物登记++++<br/>")
		}
		this.eat = function(){
			document.write("宠物必须吃饱++++<br/>")
		}
	}
	function Dog(){
		Dog.superClass.constructor.call(this);
		this.run = function(){
			document.write("小狗跑步++++<br />")
		}
	}
	function Cat(){
		Cat.superClass.constructor.call(this);
		this.run = function(){
			document.write("小猫跑步++++<br />")
		}
		this.sing = function(){
			document.write("小鸟唱歌++++<br />")
		}
	}
	function Pig(){
		Pig.superClass.constructor.call(this);
		this.run = function(){
			document.write("小猪跑步++++<br />")
		}
		this.sing = function(){
			document.write("小鸟唱歌++++<br />")
		}
	}
	function Bird(){
		Bird.superClass.constructor.call(this);
		this.sing = function(){
			document.write("小鸟唱歌++++<br />")
		}
	}
	//继承
	extend(Bird,BasePet);
	extend(Dog,BasePet);
	extend(Cat,BasePet);
	extend(Pig,BasePet);
	
	//pcat 宠物店
	var pcatPetShop = new Petshop();
	var flowerPig = pcatPetShop.sellPetShop("pig");
	flowerPig.run();
	
	//静态工厂
	var PetFactory = {
		sellPetShop:function(kind){
			//宠物对象
			var pet;
			//种类
			switch(kind){
				case 'dog':
					pet = new Dog();
					break;
				case 'cat':
					pet = new Cat();
					break;
				case 'pig':
					pet = new Pig();
					break;
				default:
					pet = new Bird();
			}
			Interface.ensureImplements(pet,Pet);
			return pet;
		}
	}
	//利用工厂的新宠物店
	var Petshop2 = function(){};
	Petshop2.prototype.sellPetShop = function(kind){
		var pet = PetFactory.sellPetShop(kind);
		pet.eat();
		pet.reginster();
		return pet;
	}
	var pcatPetshop2 = new Petshop2();
	var flowerCat = pcatPetshop2.sellPetShop("cat");
	flowerCat.sing();
})()
