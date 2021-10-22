var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (newProduct) {
        this.products.push(newProduct);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        this.products.forEach(function (el) { sumScale += el.getScale(); });
        return sumScale;
    };
    ;
    Scales.prototype.getNameList = function () {
        var nameList;
        nameList = this.products.map(function (el) { return el.getName(); });
        return nameList;
    };
    return Scales;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_scale, _name) {
        this.typeProduct = 'Tomato';
        this.name = _name;
        this.scale = _scale;
    }
    ;
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Apple = /** @class */ (function () {
    function Apple(_scale, _name) {
        this.typeProduct = 'Apple';
        this.name = _name;
        this.scale = _scale;
    }
    ;
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var t1 = new Tomato(10, '1111');
var t2 = new Tomato(20, '2222');
var a1 = new Apple(1, 'aaaa');
var a2 = new Apple(2, 'bbbb');
var s1 = new Scales;
s1.add(t1);
s1.add(t2);
s1.add(a1);
s1.add(a2);
console.log(s1.getNameList());
console.log(s1.getSumScale());
//# sourceMappingURL=app.js.map