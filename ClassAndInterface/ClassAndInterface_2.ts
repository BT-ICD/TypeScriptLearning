interface IDistance{
    inch:number;
    feet:number;
    getData: ()=>string;
};
class Distance implements IDistance{
     inch: number;    
     feet: number;
    getData (){
        return `Feet : ${this.feet} Inch: ${this.inch} `;
    };
}
//To create object of Distance Class - d1
let d1: Distance= new Distance();
d1.feet=10;
d1.inch=20;
console.log(d1.getData());