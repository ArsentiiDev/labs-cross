import { IShow } from './IShow.interface';

export class ShowConsole implements IShow {
    show(s:string) {
        console.log(s);
    }
}
