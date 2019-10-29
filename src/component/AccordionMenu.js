import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  LayoutPanel,
  Accordion,
  AccordionPanel,
  Tree
} from "rc-easyui";

import "./styles/left-side.css";
const left = {
  width: 260,
  height: "100%",
  backgroundColor: "red"
};

class AccordionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: [
        {
          id: 40,
          text: <Link to="/awc">Home</Link>
        },
        {
          id: 1,
          text: "HR",
          state: "open",
          children: [
            {
              id: 11,
              text: <Link to="/personnel">PERSONNEL</Link>
            },
            {
              id: 11,
              text: <Link to="/contract">CONTRACT</Link>
            },
            {
              id: 11,
              text: <Link to="/bank">BANK</Link>
            },
            {
              id: 11,
              text: <Link to="/file">FILE</Link>
            }
          ]
        },
        {
          id: 1,
          text: "ASSETS",
          state: "open",
          children: [
            {
              id: 11,
              text: <Link to="/assetslist">Assets List</Link>
            },
            {
              id: 11,
              text: <Link to="/contract">Assets Assigment</Link>
            },
            {
              id: 11,
              text: <Link to="/contract">Assets Type</Link>
            },
            {
              id: 11,
              text: <Link to="/manufacturer">Manufacturer</Link>
            }
          ]
        },
        {
          id: 1,
          text: "TIMESHEET",
          state: "open",
          children: [
            {
              id: 11,
              text: <Link to="/dailyinput">DAILY INPUT</Link>
            },
            {
              id: 11,
              text: <Link to="/contract">MONTHLY TIMESHEET</Link>
            }
          ]
        },
        {
          id: 1,
          text: "PROJECT MANAGEMENT",
          children: [
            {
              id: 11,
              text: <Link to="/projectlist">PROJECT LIST</Link>
            },
            {
              id: 11,
              text: <Link to="/productlist">PRODUCT LIST</Link>
            },
            {
              id: 11,
              text: <Link to="/productrequirement">PRODUCT REQUIREMENT</Link>
            }
          ]
        },
        {
          id: 1,
          text: "USERS",
          children: [
            {
              id: 11,
              text: <Link to="/usermanagement">User Management</Link>
            },
            {
              id: 11,
              text: (
                <Link to="/responsibilitymatrix">Responsibility Matrix</Link>
              )
            },
            {
              id: 11,
              text: <Link to="/useractivity">User Activity</Link>
            },
            {
              id: 11,
              text: <Link to="/notificationemail">Notification Email List</Link>
            }
          ]
        }
      ]
    };
  }

  handleTree = e => {
    console.log("asdas");
  };
  render() {
    return (
      <Accordion style={{ hieght: "100vh" }}>
        <AccordionPanel>
          <Tree
            data={this.state.treeData}
            onClick={e => this.handleTree}
          ></Tree>
        </AccordionPanel>
        {/* Tree */}
      </Accordion>
    );
  }
}

export default AccordionMenu;
