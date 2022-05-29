import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCardContent, IonItem, IonLabel, IonInput, IonCard, IonButton, IonText } from '@ionic/react'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Task from '../../components/Task'
import { getTasks } from '../../data/task'
import { Vector2d } from './classes/Vector2d'
import { Vector3d } from './classes/Vector3d';

type Props = {}

const Abstract = (props: Props) => {

    const inputN = useRef<HTMLIonInputElement>(null)

    const [vectors, setVectors] = useState<any>([]);
    const [max, setMax] = useState<number>();

    const getRandomInt = (max: number) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    const createVectors = () => {

        let vectors = [];

        const n = inputN.current!.value as number;

        for (let i = 0; i < 2 * n; i++) {

            let vector2d = new Vector2d(getRandomInt(100), getRandomInt(100));
            let vector3d = new Vector3d(getRandomInt(100), getRandomInt(100), getRandomInt(100));

            vectors.push(vector2d);
            vectors.push(vector3d);
        }
        let max = 0;
        vectors.forEach(el => {
            el.calculateLength();
            if (max < el.length) max = el.length;
        })

        setVectors(vectors);
        setMax(max);


    }
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Григор'єв Арсентій КН-32</IonTitle>
                </IonToolbar>
            </IonHeader>
            <Task task={getTasks()[5]} />
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel>Кількість векторів</IonLabel>
                            <IonInput ref={inputN} />
                        </IonItem>
                        <IonButton expand="block" onClick={createVectors}>Display</IonButton>
                    </IonCardContent>
                    {vectors && vectors.map((el: Vector2d | Vector3d) => {
                        return (
                            <IonText key={el.length} color={max === el.length ? 'danger' : ''}>
                                <p>{el.show()}</p>
                            </IonText>
                        )
                    })}
                </IonCard>
            </IonContent>

        </>
    )
}

export default Abstract