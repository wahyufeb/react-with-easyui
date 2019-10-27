import React from "react";

import { Layout, LayoutPanel } from "rc-easyui";
import AccordionMenu from "./LeftSide";

// Home
import Home from "./Home/Home";
const left = {
  width: 260,
  height: "100%",
  backgroundColor: "red"
};
class LayoutContainer extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <LayoutPanel
            region="west"
            title="AWC"
            collapsible
            expander
            style={left}
          >
            <AccordionMenu />
          </LayoutPanel>
          <LayoutPanel region="center" title="Home" style={{ height: "100vh" }}>
            <Home />
          </LayoutPanel>
        </Layout>
      </div>
    );
  }
}

export default LayoutContainer;
