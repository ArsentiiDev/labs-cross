import { Good } from "./Good.class";
import { IProduct } from "./IProduct.interface";
import { IShow } from "./IShow.interface";
import { IBuyer } from './IBuyer.interface';

export class Milk extends Good implements IBuyer {

    price() {
        var t = getRandomInt(1, 100);
        return t;
    }

    constructor(a:string, b:string, shower:IShow) {
        super(a,b)
        shower.show('Продукт ' + this.name + ' Тип ' + this.type + ' Ціна ' + this.price())
    }

    Buy() {
        console.log('Ви купили молоко')
    }

}

function getRandomInt(min: number, max: number) {
    return Math.random() * (max - min) + min;
}