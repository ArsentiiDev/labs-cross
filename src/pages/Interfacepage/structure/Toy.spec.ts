import { IShow } from "./IShow.interface";
import { Toy } from './Toy.class';
import { ShowConsole } from './ShowConsole.class';

describe('Toy  testing', () => {
    let shower:IShow;
    let toyObj: Toy

    beforeEach(() => {
        shower = new ShowConsole();
        toyObj = new Toy("LOL", 'іграшка', shower);
    })

    fit("Створення екземпляру класу Shower", () => {
        expect(shower).toBeTruthy();
    });

    fit("Створення екземпляру класу Try", () => {
        expect(toyObj).toBeTruthy();
    });
});