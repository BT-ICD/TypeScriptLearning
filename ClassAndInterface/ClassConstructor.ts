class DistanceClass{
    // private _inch:number;
    // private _feet:number
 //No need to define member ()
    constructor(public inch:number, public feet:number){
        // this._inch=inch;
        // this._feet=feet;
    }
    getData():string{
        // let data = `Inch: ${this._inch} and Feet: ${this._feet}`;
        let data = `Inch: ${this.inch} and Feet: ${this.feet}`;
        return data;
    }
}
let d1obj= new DistanceClass(10,2);
console.log(d1obj.getData());
d1obj.inch=5;
d1obj.feet=7;
console.log(d1obj.getData());