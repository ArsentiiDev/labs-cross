import { Good } from "./Good.class";
import { IShow } from "./IShow.interface";
import { IBuyer } from './IBuyer.interface';

export class Toy extends Good implements IBuyer{

    constructor(a:string, b:string, shower:IShow) {
        super(a,b)
        shower.show('Продукт ' + this.name + ' Тип ' + this.type + ' Ціна ' + this.price())
    }

    price() {
        var t = getRandomInt(1, 100);
        return t
    }


    Buy() {
        console.log('Ви купили іграшку')
    }

}

function getRandomInt(min: number, max: number) {
    return Math.random() * (max - min) + min;
}