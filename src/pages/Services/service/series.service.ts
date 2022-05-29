import { LogService } from './log.service';

export class series {
    static xy =  new Map()

    static getSeries (x:number) {
        let
        sum = Math.PI/2,
        min=1E-12,
        mem=0,
        n=0
    
        do {
          let k = 2*n + 1; 
          let koef=-4/Math.PI;
          mem = koef * Math.cos(k*x)/Math.pow((k), 2);
          sum += mem;
          n++;
        } while(mem > min || mem <-min)
    
        return sum;
      }
    
      static getTab(xn:number, xk:number, h:number) {
        let x=xn,
        y=0.0;
        
        while(x <= xk) {
          y = series.getSeries(x);
          this.xy.set(x, y);
          if(LogService)
          LogService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
          x += h;
        }
        return this.xy;
      }
}