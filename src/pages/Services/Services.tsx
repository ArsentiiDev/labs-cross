import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItemDivider, IonCardContent, IonItem, IonLabel, IonInput, IonCard, IonButton } from '@ionic/react'
import React, { useRef } from 'react'
import Task from '../../components/Task'
import { getTasks } from '../../data/task'
import formula from '../../images/formula.jpg';
import { tabService } from './service/tab.service';
import { series } from './service/series.service';
import { recursion } from './service/recursion.service';

type Props = {}

const Services = ({ }: Props) => {

    const inputXn = useRef<HTMLIonInputElement>(null)
    const inputXk = useRef<HTMLIonInputElement>(null)
    const inputh = useRef<HTMLIonInputElement>(null)

    const calculate = () => {

        let xn1 = inputXn.current!.value as number;
        let xk1 = inputXk.current!.value as number;
        let h1 = inputXn.current!.value as number;

        let xyTab = new Map();
        let xySeries = new Map();

        console.log("Табулювання");
        xyTab = tabService.getTab(+xn1, +xk1, +h1)

        console.log("Ряд");
        xySeries = series.getTab(+xn1, +xk1, +h1);

        console.log("Рекурсія");
        recursion.getTab(+xn1, +xk1, +h1);

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
            <IonContent>
                <Task task={getTasks()[7]} image={formula} />
                <IonItemDivider></IonItemDivider>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel position="floating">Xn</IonLabel>
                            <IonInput ref={inputXn} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Xk</IonLabel>
                            <IonInput ref={inputXk} />
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">h</IonLabel>
                            <IonInput ref={inputh} />
                        </IonItem>
                        <IonButton onClick={calculate} expand="block">Calculate</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </>
    )
}

export default Services