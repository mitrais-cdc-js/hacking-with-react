import React from 'react';

function App(props) {
  return (
    <div>
      <h1>Unofficial GitHub Browser v0.1</h1>
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
