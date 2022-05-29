import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useRef } from 'react';
import Task from '../../components/Task';
import { getTasks } from '../../data/task';
import './Tab3.css';

const Tab3: React.FC = () => {

    const inputOne = useRef<HTMLIonInputElement>(null)
    const [matrix, setMatrix] = useState([[

    ]])

    const createMatrix = () => {

        let size = inputOne.current!.value as number

        let a = new Array(size);
        let i: number = 0, j: number = 0;


        for (i = 0; i < size; i++) {
            a[i] = new Array(size);

            for (j = 0; j < size; j++) {
                a[i][j] = Math.floor(Math.random() * 200 - 100);
            }
        }
        setMatrix(a)

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
            <IonContent fullscreen>
                <Task task={getTasks()[2]} />
                <IonItem>
                    <IonLabel position="floating">
                        Enter N:
                    </IonLabel>
                    <IonInput ref={inputOne} />
                </IonItem>
                <IonButton expand="block" onClick={createMatrix}>Create Matrix</IonButton>
                <IonGrid>
                    {matrix &&
                        matrix.map((row, i) => {
                            return (
                                <IonRow>
                                    {
                                        row.map((col, j) => {
                                            return (
                                                <IonCol key={col} className={(col < 0 && col % 2 === 0) ? "ion-red" : ""}>
                                                    {col}
                                                </IonCol>
                                            )
                                        })
                                    }
                                </IonRow>
                            )
                        })
                    }
                </IonGrid>
            </IonContent>
        </>
    );
};

export default Tab3;
