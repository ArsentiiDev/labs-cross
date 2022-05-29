import { Chart, registerables } from 'chart.js';
import { ElementRef } from 'react';


export class Graphics {
    xn: number;
    xk: number;
    a: number;
    h: number;
    xx:string[] = [];
    yy: number[] =  [];
    data1:string[] = [];
    lineChart: any;
 
    
    constructor(Xn:number, Xk:number, a:number, h:number) {
        this.xn = Xn;
        this.xk = Xk;
        this.a = a;
        this.h = h;
        Chart.register(...registerables);
    }

    lineChartMethod() {
        if(this.lineChart instanceof Chart) {
            this.lineChart.destroy();
          }
      
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          this.lineChart = new Chart(<HTMLCanvasElement>document.getElementById('canvas'), {
            type: 'line', 
      
            data: {
              labels: this.xx,
      
              datasets: [
                {
                  label: 'Графік функції', 
                  fill: false,
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderDashOffset: 0.0,
                  pointRadius: 1,
                  data: this.yy, 
                  spanGaps: false
                }
              ]
            }
          });
    }

    graphRas() {
        let x:number, y:number;

        x = this.xn;

        while(x < this.xk) {
            if(x <= 0) {
              y = (Math.exp(-2*x) + Math.pow((2*Math.pow(x,4)+ Math.pow(x,2) - 1),(1/7)));
            }
      
            else if (x <= this.a) {
              y = ((Math.pow(x,3)+ 2*Math.pow(x,2) - 4*x)/(Math.pow(x,5)*(1 / Math.tan(2*Math.pow(x,3)))));
            }
      
            else {
              y = Math.pow(Math.sin(x + 5), 2) / (Math.pow((Math.abs(x) + 2), 1/3) - 1);
            }
            this.xx.push(x.toFixed(1));
            this.yy.push(parseFloat(y.toFixed(1)));
      
            let s = "x = " + x.toFixed(1) + ", y = " + y.toFixed(1);
            this.data1.push(s);
            
            x = x + this.h;
          }
          this.lineChartMethod();
    }

    
}