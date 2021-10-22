interface IScalable{
    scale:number;
    name:string;
    getScale():number;
    getName():string;
}

class Scales {
    products:Array<IScalable>;
    constructor(){
        this.products = [];
    }
    add(newProduct:IScalable):void{
        this.products.push(newProduct)
    };
    getSumScale():number{
        let sumScale:number=0;
        this.products.forEach(el=>{sumScale+=el.getScale()})
        return sumScale
    };
    getNameList():Array<string>{
        let nameList:string[];
        nameList = this.products.map(el=>el.getName());
        return nameList;
    }


}

class Tomato implements IScalable{
    name:string;
    scale:number;
    constructor(_scale:number,_name:string){
        this.name = _name;
        this.scale = _scale;
    };
    typeProduct:string='Tomato';

    getScale():number{
        return this.scale  
    }
    getName():string{
        return this.name
    }

}

class Apple implements IScalable{
    name:string;
    scale:number;
    constructor(_scale:number,_name:string){
        this.name = _name;
        this.scale = _scale;
    };
    typeProduct:string='Apple';
    getScale():number{
        return this.scale  
    }
    getName():string{
        return this.name
    }
}

let t1 = new Tomato(10,'1111');
let t2 = new Tomato(20,'2222');

let a1 = new Apple(1,'aaaa');
let a2 = new Apple(2,'bbbb');

let s1 = new Scales;
s1.add(t1);
s1.add(t2);
s1.add(a1);
s1.add(a2);

console.log(s1.getNameList());
console.log(s1.getSumScale());
