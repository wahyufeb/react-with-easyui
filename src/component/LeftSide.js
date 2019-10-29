import React from "react";
import { Layout, LayoutPanel } from "rc-easyui";
import AccordionMenu from "./AccordionMenu";

const left = {
  width: 260,
  height: "100%",
  backgroundColor: "red"
};

export class LeftSide extends React.Component {
  render() {
    return (
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
      </Layout>
    );
  }
}
