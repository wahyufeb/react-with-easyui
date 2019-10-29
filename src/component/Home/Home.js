import React from "react";
import { Search, Centang } from "./component/Search";
import { Layout, LayoutPanel } from "rc-easyui";

// left Side
import LeftSide from "../LeftSide";
class Home extends React.Component {
  render() {
    return (
      <Layout>
        <LayoutPanel region="center" title="Home" style={{ height: "100vh" }}>
          <Search />
          <Centang />
        </LayoutPanel>
      </Layout>
    );
  }
}

export default Home;
