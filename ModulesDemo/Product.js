"use strict";
exports.__esModule = true;
var Product = /** @class */ (function () {
    function Product(id, name, rate) {
        this.id = id;
        this.name = name;
        this.rate = rate;
    }
    Product.prototype.printData = function () {
        console.log(this.id + " " + this.name + " " + this.rate);
    };
    return Product;
}());
exports.Product = Product;
