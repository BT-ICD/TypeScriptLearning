var DistanceClass = /** @class */ (function () {
    // private _inch:number;
    // private _feet:number
    //No need to define member ()
    function DistanceClass(inch, feet) {
        this.inch = inch;
        this.feet = feet;
        // this._inch=inch;
        // this._feet=feet;
    }
    DistanceClass.prototype.getData = function () {
        // let data = `Inch: ${this._inch} and Feet: ${this._feet}`;
        var data = "Inch: " + this.inch + " and Feet: " + this.feet;
        return data;
    };
    return DistanceClass;
}());
var d1obj = new DistanceClass(10, 2);
console.log(d1obj.getData());
d1obj.inch = 5;
d1obj.feet = 7;
console.log(d1obj.getData());
