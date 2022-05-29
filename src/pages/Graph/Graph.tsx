import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { Chart, registerables } from 'chart.js';
import Task from '../../components/Task';
import { getTasks } from '../../data/task';
import { useRef } from 'react';
import { Graphics } from './classes/graph.class';

type Props = {}


const Graph: React.FC = () => {

    const inputXn = useRef<HTMLIonInputElement>(null);
    const inputXk = useRef<HTMLIonInputElement>(null);
    const inputA = useRef<HTMLIonInputElement>(null);
    const inputH = useRef<HTMLIonInputElement>(null);
    const canvas = useRef<HTMLCanvasElement>(null);

    const GraphShow = () => {
        let xn = inputXn.current!.value as number;
        let xk = inputXk.current!.value as number;
        let a = inputA.current!.value as number;
        let h = inputH.current!.value as number;
        let newGraphic = new Graphics(+xn, +xk, +a, +h);
        newGraphic.graphRas();
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
                <IonItemDivider></IonItemDivider>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="floating">
                                Xk:
                            </IonLabel>
                            <IonInput ref={inputXk} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">
                                Xn:
                            </IonLabel>
                            <IonInput ref={inputXn} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">
                                a:
                            </IonLabel>
                            <IonInput ref={inputA} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">
                                h:
                            </IonLabel>
                            <IonInput ref={inputH} />
                        </IonItem>
                        <IonButton expand="block" onClick={GraphShow}>Calculate</IonButton>
                    </IonCardContent>
                </IonCard>
                <IonItem>
                    <canvas id="canvas"></canvas>
                </IonItem>
            </IonContent>
        </>
    )
}

export default Graph;