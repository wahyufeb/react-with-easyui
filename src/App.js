import React from "react";
import {Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="accordion">Accordion</Link>
          </li>
          <li>
            <Link to="awc">AWC</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
