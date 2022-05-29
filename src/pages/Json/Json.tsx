import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonLabel, IonInput, IonItem, IonItemDivider, IonCardContent, IonCard, IonButton, IonTextarea, IonText, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { getTasks } from '../../data/task';
import Task from './../../components/Task';
import axios from 'axios';

type Props = {}

const Json = (props: Props) => {

    const [departments, setDepartments] = useState<any>();
    const [department, setDepartment] = useState<string>();

    const download = async () => {
        await axios.get(
            'https://api.jsonbin.io/b/628d32c1402a5b38020bdca9', {
            headers: {
                'secret-key': '$2b$10$jhzUhnb57yA5wWGSSEmoqeSw0LweGVJBoAQQ8/1XowcP3GNiNmPOy'
            }
        })
            .then(res => {
                setDepartments(res.data)
            })
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
            <Task task={getTasks()[4]} />
            <IonItemDivider></IonItemDivider>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel>Department</IonLabel>
                            <IonSelect value={department} placeholder="Select One" onIonChange={e => setDepartment(e.detail.value)}>
                                <IonSelectOption value="CS">CS</IonSelectOption>
                                <IonSelectOption value="PH">PH</IonSelectOption>
                                <IonSelectOption value="MTH">MTH</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItemDivider></IonItemDivider>
                        <IonButton expand='block' onClick={download}>Show</IonButton>
                    </IonCardContent>
                    {departments && departments.map((el: any) => {
                        return (
                            <IonItem key={el.discipline}>
                                <IonLabel>
                                    <p>{el.department}</p>
                                    <p>{el.Lecturer_name}</p>
                                </IonLabel>
                                <IonText color={department === el.department ? 'danger' : ''}>
                                    <p>{el.discipline}</p>
                                </IonText>
                            </IonItem>

                        )
                    })}
                </IonCard>


            </IonContent>
        </>
    )
}

export default Json