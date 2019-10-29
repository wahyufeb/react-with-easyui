import React from "react";

import { Layout, LayoutPanel } from "rc-easyui";

import AccordionMenu from "./AccordionMenu";
import "./styles/left-side.css";

import Home from "./Home/Home";
class LayoutHome extends React.Component {
  render() {
    return (
      <div>
        <Layout>
          <LayoutPanel
            region="west"
            title="AWC"
            collapsible
            expander
            className="left"
          >
            <AccordionMenu />
          </LayoutPanel>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default LayoutHome;
