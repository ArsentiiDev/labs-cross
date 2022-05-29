import { IBuyer } from "./IBuyer.interface";
import { IProduct } from "./IProduct.interface";
import { IShow } from "./IShow.interface";

// export class Buyer implements IBuyer,IProduct {
//     name: string;
//     type: string;
//     cost: number;
//     constructor(a:string, b:string, c:number, shower:IShow) {
//         this.name = a;
//         this.type = b;
//         this.cost = c;
//         shower.show('Покупець купив ' + this.name + ' за ціною' + this.cost)
//     }

//     Buy() {
//         console.log('Продукт куплено!')
//     }
// }