import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

//IMPORT BROWSER ROUTER, ROUTER AND SWITCH
//IMPORT COMPONENTS
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Resume from '../src/components/Resume';
import Portfolio from '../src/components/Portfolio';
import About from '../src/components/About';
import Find from '../src/components/Findme';
import BaseLayout from '../src/components/Layout';


ReactDOM.render(
  <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/Resume" component={Resume} />
          <Route path="/Portfolio" component={Portfolio}/>
          <Route path="/Find" component={Find}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>




,document.getElementById('root'));
registerServiceWorker();
