import React from "react";
import { Accordion, AccordionPanel } from "rc-easyui";

export class easyAccordion1 extends React.Component {
  render() {
    return (
      <div>
        <Accordion style={{ height: 300 }}>
          <AccordionPanel title="Accordion">
            <h4>Accordion1</h4>
          </AccordionPanel>
          <AccordionPanel title="Accordion 2">
            <h4>Accordion 2</h4>
          </AccordionPanel>
        </Accordion>
      </div>
    );
  }
}

export class easyAccordion2 extends React.Component {
  render() {
    return (
      <div>
        <Accordion
          animate
          multiple
          selectIndex={[0, 1]}
          style={{ height: 300 }}
        >
          <AccordionPanel title="Accordion">
            <h4>Accordion1asdasd</h4>
          </AccordionPanel>
          <AccordionPanel title="Accordion 2">
            <h4>Accordion 2</h4>
          </AccordionPanel>
        </Accordion>
      </div>
    );
  }
}
