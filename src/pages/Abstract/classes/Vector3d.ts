import {  Vector} from './Vector';

export class Vector3d extends Vector {
    az: number;

    constructor(a:number,b:number,c:number) {
        super();
        this.ax=a;
        this.ay=b;
        this.az=c;
    }

    calculateLength() {
        this.length = Math.sqrt(this.ax**2 + this.ay**2 + this.az**2);
    }
}