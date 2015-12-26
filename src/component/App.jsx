import React from 'react';
import { Datepicker, Checkbox, Button } from 'antd';
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <Datepicker />
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
