import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <div className="my-app">
    Hello from App.
    <span className="ss-pro">Some source sans pro font</span>
    <div className="some-image-thing"></div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
