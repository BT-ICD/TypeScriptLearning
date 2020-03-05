var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.printData = function () {
        console.log(Developer.descrition); //Access member using class name instead of this.
    };
    Developer.descrition = "Full Stack Developer";
    return Developer;
}());
Developer.printData();
Developer.descrition = "We will do it";
Developer.printData();
