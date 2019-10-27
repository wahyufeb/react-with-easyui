import React from "react";
import { Search, Centang } from "./component/Search";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Centang />
      </div>
    );
  }
}

export default Home;
