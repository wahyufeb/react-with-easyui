import React from "react";
import { Link } from "react-router-dom";
import { Layout, LayoutPanel } from "rc-easyui";
import AccordionMenu from "../AccordionMenu";
import DataGridPersonnel from "./component/DataGridPersonnel";
class Personnel extends React.Component {
  render() {
    return (
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
        <LayoutPanel region="center" title="Home" style={{ height: "100vh" }}>
          <DataGridPersonnel />
        </LayoutPanel>
      </Layout>
    );
  }
}

export default Personnel;
