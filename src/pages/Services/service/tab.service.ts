import {LogService} from './log.service';

export class tabService {
    static xy = new Map()

    static getTab(xn:number,xk:number,h:number) {
        let x=xn,
        y=0.0;
    
        while(x <= xk) {
          y = Math.abs(x);
          this.xy.set(x, y);
          if(LogService)
            LogService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
          x += h;
        }
        return this.xy;
    }
}