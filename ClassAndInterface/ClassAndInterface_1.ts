interface IProduct{
    id:number;
    name:string;
    category?:string
}
//Object initiazed from interface
let objProduct: IProduct={
    id:101,
    name:'Dettol'
}
//console.log("Id:" + objProduct.id  + " name: " + objProduct.name);
//Template String
let data = `ID: ${objProduct.id} name: ${objProduct.name}`;
console.log(data);