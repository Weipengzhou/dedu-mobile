import React from 'react';

import './App.less';
import LeftNav from './components/LeftNav/LeftNav';
import Index from './containers/Index/Index';
import Stuff from './containers/Stuff/Stuff';
import Cooperation from './containers/Cooperation/Cooperation';
import About from './containers/About/About';
class App extends React.Component {
  render() {
    return (
      <div className="App">

        <LeftNav text={<About/>}></LeftNav>

      </div>
    );
  }
}

export default App;
