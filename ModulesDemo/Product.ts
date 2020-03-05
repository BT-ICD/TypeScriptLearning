export class Product{
    constructor(public id:number, public name:string, public rate:number){
    }
    printData(){
        console.log(this.id + " " + this.name + " " + this.rate);
    }
}
