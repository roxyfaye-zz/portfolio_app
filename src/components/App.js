import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './components/Layout';




class App extends Component {
  constructor(props) {
    super(props);


  render() {

    return (
      <BaseLayout>
        <div className="menu col-md-10 col-md-offset-1">
          <h2 className="col-md-offset-2">Resume</h2>
          
        </div>
       </BaseLayout>
    );
  }
}
}


export default App;
