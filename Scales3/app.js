var Scales = /** @class */ (function () {
    function Scales(c) {
        this.products = c;
    }
    Scales.prototype.add = function (newProduct) {
        this.products.addItem(newProduct);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.products.getCount(); i++)
            sumScale += this.products.getItem(i).getScale();
        return sumScale;
    };
    ;
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.products.getCount(); i++)
            nameList.push(this.products.getItem(i).getName());
        return nameList;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.arrProducts = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.arrProducts.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.arrProducts[index];
    };
    ;
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.arrProducts.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        var countLS = this.getCount();
        window.localStorage.setItem('Product_' + countLS, JSON.stringify(item));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        return new Product(JSON.parse(window.localStorage.getItem('Product_' + index)).scale, JSON.parse(window.localStorage.getItem('Product_' + index)).name);
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var index = -1;
        var inLocStr;
        do {
            index++;
            inLocStr = JSON.parse(window.localStorage.getItem('Product_' + index));
        } while (inLocStr != null);
        return index;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
;
window.localStorage.clear();
var t1 = new Product(10, 'd1111');
var t2 = new Product(20, 's2222');
var a1 = new Product(1, '1aaaa');
var a2 = new Product(2, '1bbbb');
// let st1 = new ScalesStorageEngineArray();
// console.log(st1);
var s1 = new Scales(new ScalesStorageEngineArray());
s1.add(t1);
s1.add(a1);
console.log(s1);
console.log(s1.getNameList());
console.log(s1.getSumScale());
var s2 = new Scales(new ScalesStorageEngineLocalStorage());
s2.add(t2);
s2.add(a2);
console.log(s2);
console.log(s2.getNameList());
console.log(s2.getSumScale());
//# sourceMappingURL=app.js.map