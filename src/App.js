import React from 'react';

import './App.less';
import LeftNav from './components/LeftNav/LeftNav';
import Index from './containers/Index/Index';
class App extends React.Component {
  render() {
    return (
      <div className="App">

        <LeftNav text={<Index/>}></LeftNav>

      </div>
    );
  }
}

export default App;
