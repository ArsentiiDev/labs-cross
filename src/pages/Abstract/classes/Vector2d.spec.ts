import { Vector2d } from "./Vector2d";

describe('Vector2d testing', () => {
    let vector2d:Vector2d;

    beforeEach(() => {
        vector2d = new Vector2d(20, 30);
    })

    fit("Створення екземпляру класу Vector2d", () => {
        expect(vector2d).toBeTruthy();
    });

    fit("Розрахунок довжини вектора при x=20, y=30", () => {
        vector2d.calculateLength();
        let actual = vector2d.length;
        let expected = Math.sqrt(20**2 + 30**2);
        expect(actual.toFixed(2)).toBe(expected.toFixed(2));
    });
});