import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Task from '../../components/Task';
import { hasPairNumber } from '../../utils/helpers';
import { getTasks } from '../../data/task'
// import './Tab1.css';

const Tab1: React.FC = () => {

    const [sum, setSum] = useState<number>()
    const inputOne = useRef<HTMLIonInputElement>(null)
    const inputTwo = useRef<HTMLIonInputElement>(null)
    const inputThree = useRef<HTMLIonInputElement>(null)

    const calculateRes = (): void => {
        const firstNumber = inputOne.current?.value as number;
        const secondNumber = inputTwo.current?.value as number;
        const thirdNumber = inputThree.current?.value as number;
        let sum: number;
        if (hasPairNumber(firstNumber, secondNumber, thirdNumber)) {
            sum = Math.pow((+firstNumber + +secondNumber + +thirdNumber), 3)
        } else {
            sum = (Math.pow(firstNumber, 3) + Math.pow(secondNumber, 3) + Math.pow(thirdNumber, 3))
        }

        setSum(sum)
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
                <Task task={getTasks()[0]} />
                <IonItemDivider></IonItemDivider>
                <IonItem>
                    <IonLabel position="floating">
                        Enter first number:
                    </IonLabel>
                    <IonInput ref={inputOne} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">
                        Enter second number:
                    </IonLabel>
                    <IonInput ref={inputTwo} />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">
                        Enter third number:
                    </IonLabel>
                    <IonInput ref={inputThree} />
                </IonItem>
                <IonButton expand="block" onClick={calculateRes}>Calculate</IonButton>
                {sum && <IonCard>
                    <IonCardHeader>
                        <IonCardTitle>Output</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <h3>{sum}</h3>
                    </IonCardContent>
                </IonCard>}
            </IonContent>
        </>

    );
};

export default Tab1;
