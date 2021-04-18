import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Navigation />
        <Content />
      </>
    );
  }
}

export default App;