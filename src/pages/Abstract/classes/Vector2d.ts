import {Vector} from './Vector';

export class Vector2d extends Vector {

    constructor(a:number,b:number) {
        super();
        this.ax=a;
        this.ay=b;
    }

    calculateLength():void {
        this.length = Math.sqrt(this.ax*this.ax + this.ay*this.ay);
    }


}