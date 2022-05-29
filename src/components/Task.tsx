import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonThumbnail } from '@ionic/react'
import React from 'react'
import { tasks } from '../data/task'

type Props = {
    task: tasks,
    image?: string
}

export default function Task({ task, image }: Props) {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Завдання</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                {task.task}

            </IonCardContent>
            {image &&
                <IonItem>
                    <IonImg src={image} />
                </IonItem>}
        </IonCard>
    )
}