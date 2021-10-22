var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (newProduct) {
        this.products[this.products.length] = newProduct;
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
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale, _name) {
        var _this = _super.call(this, _scale, _name) || this;
        _this.typeProduct = 'Tomato';
        return _this;
    }
    ;
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale, _name) {
        var _this = _super.call(this, _scale, _name) || this;
        _this.typeProduct = 'Apple';
        return _this;
    }
    ;
    return Apple;
}(Product));
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