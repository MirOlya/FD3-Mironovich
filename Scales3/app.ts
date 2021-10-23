interface IStorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number
}

class Scales<StorageEngine extends IStorageEngine>{
    products:StorageEngine;
    constructor(c: StorageEngine){
        this.products = c;
    }
    add(newProduct:Product):void{
        this.products.addItem(newProduct)
    };

    getSumScale():number{
        let sumScale:number=0;
        for(let i=0;i<this.products.getCount();i++)
            sumScale+=this.products.getItem(i).getScale()
        return sumScale
    };
    getNameList():Array<string>{
        let nameList:string[]=[];
        for(let i=0;i<this.products.getCount();i++)
            nameList.push(this.products.getItem(i).getName());
        return nameList;
    }
}



class ScalesStorageEngineArray implements IStorageEngine{
    arrProducts:Array<Product>;
    constructor(){
        this.arrProducts = []
    }
    addItem(item:Product):void{
        this.arrProducts.push(item);
    }
    getItem(index:number):Product{
        return this.arrProducts[index]
    };
    getCount():number{
        return this.arrProducts.length
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    addItem(item:Product):void{
        const countLS:number = this.getCount();
        window.localStorage.setItem('Product_'+countLS,JSON.stringify(item))
}
    getItem(index:number):Product{
        return new Product(JSON.parse(window.localStorage.getItem('Product_'+index)).scale,JSON.parse(window.localStorage.getItem('Product_'+index)).name);
    };
    getCount():number{
        let index:number=-1;
        let inLocStr:void;
        do {
            index++;
            inLocStr = JSON.parse(window.localStorage.getItem('Product_'+index));
        } while(inLocStr!=null);
        return index
    }
}



class Product{
    private scale:number;
    private name:string;
    constructor(_scale:number,_name:string){
        this.name = _name;
        this.scale = _scale;
    }
    public getScale():number{
        return this.scale  
    }
    public getName():string{
        return this.name
    }
};
window.localStorage.clear();
let t1 = new Product(10,'d1111');
let t2 = new Product(20,'s2222');

let a1 = new Product(1,'1aaaa');
let a2 = new Product(2,'1bbbb');

// let st1 = new ScalesStorageEngineArray();
// console.log(st1);
let s1 = new Scales<ScalesStorageEngineArray>(new ScalesStorageEngineArray());
s1.add(t1);
s1.add(a1);
console.log(s1);

console.log(s1.getNameList());
console.log(s1.getSumScale());

let s2 = new Scales<ScalesStorageEngineLocalStorage>(new ScalesStorageEngineLocalStorage());
s2.add(t2);
s2.add(a2);
console.log(s2);

console.log(s2.getNameList());
console.log(s2.getSumScale());
