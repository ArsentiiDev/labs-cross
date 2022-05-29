import { IShow } from "./IShow.interface";
import { Toy } from './Toy.class';
import { ShowConsole } from './ShowConsole.class';
import { Milk } from "./Milk.class";

describe('Milk testing', () => {
    let shower:IShow;
    let milkObj: Milk

    beforeEach(() => {
        shower = new ShowConsole();
        milkObj = new Milk("Простоквашино", 'молоко', shower);
    })

    fit("Створення екземпляру класу Shower", () => {
        expect(shower).toBeTruthy();
    });

    fit("Створення екземпляру класу Try", () => {
        expect(milkObj).toBeTruthy();
    });
});