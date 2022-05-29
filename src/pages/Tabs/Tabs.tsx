import { IonApp, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { triangle, ellipse, square } from 'ionicons/icons'
import React from 'react'
import { Route, Redirect } from 'react-router'
import ExploreContainer from '../../components/ExploreContainer'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

type Props = {}

export default function Tabs({ }: Props) {
    return (
        <>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/tabs/tab1">
                        <Tab1 />
                    </Route>
                    <Route exact path="/tabs/tab2">
                        <Tab2 />
                    </Route>
                    <Route exact path="/tabs/tab3">
                        <Tab3 />
                    </Route>
                    <Route exact path="/tabs">
                        <Redirect to="tabs/tab1" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tab1" href="/tabs/tab1">
                        <IonIcon icon={triangle} />
                        <IonLabel>Завдання 1</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab2" href="/tabs/tab2">
                        <IonIcon icon={ellipse} />
                        <IonLabel>Завдання 2</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="tab3" href="/tabs/tab3">
                        <IonIcon icon={square} />
                        <IonLabel>Завдання 3</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </>
    )
}