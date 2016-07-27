/* global moment */

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div>
    <div className="my-app">
      Hello from App.    
    </div>
    <div className="ss-pro">Some source sans pro font</div>
    <div className="some-image-thing"></div>

    {/* The webpack ProvidePlugin allows us to use `moment` here even though it is not attached to window */}
    <div>Moment formatted date: {moment().format('YYYY-MM-DD')}</div>

    {/* process.env.NODE_ENV from webpack DefinePlugin */}
    <div>The app was buit in NODE_ENV: {process.env.NODE_ENV}</div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
