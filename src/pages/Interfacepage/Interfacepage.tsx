import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import Task from '../../components/Task'
import { getTasks } from '../../data/task'
import { Milk } from './structure/Milk.class';
import { ShowConsole } from './structure/ShowConsole.class';
import { Toy } from './structure/Toy.class';

type Props = {}

const Interfacepage = (props: Props) => {

    const calculate = () => {
        let show = new ShowConsole();
        let toy = new Toy('LOL', 'іграшка', show);
        toy.Buy();
        let milk = new Milk('Простоквашино', 'Молоко', show);
        milk.Buy();
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
            <Task task={getTasks()[6]} />

            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonButton expand="block" onClick={calculate}>Calculate</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </>
    )
}

export default Interfacepage