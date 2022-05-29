import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';
import { folderOpenOutline } from 'ionicons/icons';
import { folderOpenSharp } from 'ionicons/icons';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Лабораторна робота №1',
    url: '/tabs',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Лабораторна робота №2',
    url: '/graph',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Лабораторна робота №3',
    url: '/json',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Лабораторна робота №4',
    url: '/abstract',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Лабораторна робота №6',
    url: '/interfacepage',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Лабораторна робота №7',
    url: '/services',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Лабораторні</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
