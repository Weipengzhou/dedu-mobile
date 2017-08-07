import React from 'react';

import './App.less';
import LeftNav from './components/LeftNav/LeftNav';
import Index from './containers/Index/Index';
import Stuff from './containers/Stuff/Stuff';
import Cooperation from './containers/Cooperation/Cooperation';
class App extends React.Component {
  render() {
    return (
      <div className="App">

        <LeftNav text={<Cooperation/>}></LeftNav>

      </div>
    );
  }
}

export default App;
