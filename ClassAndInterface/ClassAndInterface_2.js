;
var Distance = /** @class */ (function () {
    function Distance() {
    }
    Distance.prototype.getData = function () {
        return "Feet : " + this.feet + " Inch: " + this.inch + " ";
    };
    ;
    return Distance;
}());
var d1 = new Distance();
d1.feet = 10;
d1.inch = 20;
console.log(d1.getData());
