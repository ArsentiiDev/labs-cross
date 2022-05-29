import { Vector3d } from "./Vector3d";

describe('Vector3d testing', () => {
    let vector3d:Vector3d;

    beforeEach(() => {
        vector3d = new Vector3d(20, 30, 40);
    })

    fit("Створення екземпляру класу Vector3d", () => {
        expect(vector3d).toBeTruthy();
    });

    fit("Розрахунок довжини вектора при x=20, y=30, z=40", () => {
        vector3d.calculateLength();
        let actual = vector3d.length;
        let expected = Math.sqrt(20**2 + 30**2 + 40**2);
        expect(actual.toFixed(2)).toBe(expected.toFixed(2));
    });
});