export abstract class Vector {
    ax: number;
    ay: number;
    length: number;

    constructor () {}

    show() {
        return 'Length of vector is ' + this.length;
    }

    abstract calculateLength():void;

}