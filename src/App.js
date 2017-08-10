import React from 'react';
import { Router, Route, hashHistory} from 'react-router';
import About from './containers/About/About';
import Cooperation from './containers/Cooperation/Cooperation';
import DesignCases from './containers/DesignCases/DesignCases';
import DesignCasesAbout from './containers/DesignCasesAbout/DesignCasesAbout';
import Index from './containers/Index/Index';
import Stuff from './containers/Stuff/Stuff';
export default(

  <Router history={hashHistory}>
        <Route path="/" component= {Index} />
            <Route path="/DesignCases" component={DesignCases}/>
              <Route path="/DesignCases/DesignCasesAbout" component={DesignCasesAbout}/>

       <Route path="/Stuff" component={Stuff}/>
        <Route path="/Cooperation" component={Cooperation}/>
         <Route path="/About" component={About}/>
    </Router>
)
