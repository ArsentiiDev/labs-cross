import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useRef, useState } from 'react';
import Task from '../../components/Task';
import { getTasks } from '../../data/task';
// import './Tab2.css';

const Tab2: React.FC = () => {

    const [sum, setSum] = useState<number>()
    const inputOne = useRef<HTMLIonInputElement>(null)
    const inputTwo = useRef<HTMLIonInputElement>(null)

    const calculateRes = () => {
        const firstNumber = inputOne.current?.value as number;
        const secondNumber = inputTwo.current?.value as number;
        let sum = 0;

        for (let i = +firstNumber; i <= +secondNumber;) {
            if (i % 2 === 0) {
                sum += i;
                i++;
            } else {
                i++;
            }

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
                <Task task={getTasks()[1]} />
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

export default Tab2;
