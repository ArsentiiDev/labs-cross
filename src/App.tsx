import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Tabs from './pages/Tabs/Tabs';
import Graph from './pages/Graph/Graph';
import Json from './pages/Json/Json';
import Abstract from './pages/Abstract/Abstract';
import Interfacepage from './pages/Interfacepage/Interfacepage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle } from '@ionic/react';
import Services from './pages/Services/Services';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>

      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />

          <IonRouterOutlet id="main">
            <Route path="/" exact>
              <Redirect to="/tabs" />
            </Route>
            <Route path="/tabs">
              <Tabs />
            </Route>
            <Route path="/graph">
              <Graph />
            </Route>
            <Route path="/json">
              <Json />
            </Route>
            <Route path="/abstract">
              <Abstract />
            </Route>
            <Route path="/interfacepage">
              <Interfacepage />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
