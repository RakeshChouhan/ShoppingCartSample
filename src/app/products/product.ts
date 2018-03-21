
export class Product{
    id:number;
    name:string;
    cartId:number;
    desc:string;
    price:number;
    imageUrl:string;
    constructor( id:number, name:string, desc:string, price:number,imageUrl:string,cartId?:number ){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price= price;
        this.imageUrl = imageUrl;
        this.cartId=cartId?cartId:0;
    }
}