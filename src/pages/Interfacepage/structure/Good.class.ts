import { IProduct } from "./IProduct.interface";

export abstract class Good implements IProduct {
    name: string;
    type: string;
    abstract price():number;

    constructor(a:string, b:string) {
        this.name = a;
        this.type = b;
    }
}