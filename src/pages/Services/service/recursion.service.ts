import { LogService } from './log.service';

export class recursion {
    static xy = new Map();
    static yy: number;

    static getRecursion(x:number, n:number, sum:number) {
        let
        min=1E-12;
        let k = 2*n + 1; 
        let koef = -4/Math.PI;
        let mem = koef * (Math.cos(k*x)/Math.pow((k), 2));
        n++;
        sum=sum+mem;
        if(mem <= min && mem >= -min) {
          this.getRecursion(x, n, sum);
        }
         else {
          this.yy=sum;
         }
      }
    
      static getTab(xn:number, xk:number, h:number) {
        let x=xn,
        y=Math.PI/2;
    
        while(x<xk) {
          this.getRecursion(x, 0, y);
          this.xy.set(x, this.yy);
          if(LogService)
          LogService.write("x=" + x.toFixed(2) + " y=" + this.yy.toFixed(4));
          x=x+h
        }
      }
}