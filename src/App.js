import React from 'react';
import { Router, Route, hashHistory} from 'react-router';
import About from './containers/About/About';
import Cooperation from './containers/Cooperation/Cooperation';
import DesignCases from './containers/DesignCases/DesignCases';
import DesignCasesAbout from './containers/DesignCasesAbout/DesignCasesAbout';
import Index from './containers/Index/Index';
import Stuff from './containers/Stuff/Stuff';
import OnlineOffer from './containers/OnlineOffer/OnlineOffer';
import OnlineOfferAbout from './containers/OnlineOfferAbout/OnlineOfferAbout';

import {Provider} from 'react-redux';
import configureStore from './redux/store'
let store = configureStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default(
 <Provider store={store}>
      <Router history={hashHistory}>
            <Route path="/" component= {Index} />
            <Route path="/DesignCases" component={DesignCases}/>
            <Route path="/DesignCases/DesignCasesAbout" component={DesignCasesAbout}/>

            <Route path="/Stuff" component={Stuff}/>

            <Route path="/Cooperation" component={Cooperation}/>
            <Route path="/About" component={About}/>
            <Route path="/OnlineOffer" component={OnlineOffer}/>
            <Route path="/OnlineOfferAbout" component={OnlineOfferAbout}/>
        </Router>
  </Provider>
)
